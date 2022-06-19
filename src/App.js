import React from 'react';
import './App.css';
import produtosList from "./Components/data/produtos.json"
import styled from 'styled-components';
import { Itens, Container } from './Components/Itens' 

const LocalDoFiltro = styled.div`
  border: 1px solid black;
  width: 350px;
  margin-left: 20px;
`;


export class App extends React.Component {
  state = {
    produtos: produtosList,
    minimoInput:"",
    maximoInput:"",
    produtoInput:''
  }

  onChangeMinimo =(event) =>{
    this.setState({minimoInput: event.target.value})
  }
  onChangeMaximo =(event) =>{
    this.setState({maximoInput: event.target.value})
  }
  onChangeProduto =(event) =>{
    this.setState({produtoInput: event.target.value})
  }

  render() {

     return (
      <>
      <h3> Quantidade de produtos:{this.state.produtos.length} </h3>
      <select id='ordem'>
        <option value={"asc"}> Crescente </option>
        <option value = {"desc"}> Decrescente </option>
      </select>
      <Container>
      <LocalDoFiltro>
        <h2>Filtro</h2>
        <p>Valor minimo</p>
        <input type={'number'} placeholder="Preço Mínimo" value={this.state.minimoInput} onChange = {this.onChangeMinimo} />
        <p>Valor maximo</p>
        <input  type={'number'} placeholder="Preço Máximo" value={this.state.maximoInput} onChange = {this.onChangeMaximo} />
        <p>Por nome</p>
        <input placeholder={"Produto"} value={this.state.produtoInput} onChange = {this.onChangeProduto} />
      </LocalDoFiltro>
          {this.state.produtos
          .filter(produto => produto.nome.toLocaleLowerCase().includes(this.state.produtoInput.toLocaleLowerCase()))
          .filter(produto => this.state.minimoInput === "" ||produto.preco>=this.state.minimoInput)
          .filter(produto => this.state.maximoInput === "" || produto.preco<=this.state.maximoInput)
          .map(produto => {
            return <Itens key = {produto.key} produto={produto} />
          })}
      </Container>  
      </>
     )
  }
}

export default App;