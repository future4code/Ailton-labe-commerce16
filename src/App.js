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
    produtoInput:'',
    ordena:"nome"
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

  onChangeOrdenar =(event) =>{
    this.setState({ordena: event.target.value})
  }

  render() {

     return (
      <>
      <h3> Quantidade de produtos: {this.state.produtos.length} </h3>
      <label for="sort">Ordenar por:</label>
      <select name="sort" value={this.state.ordena} onChange={this.onChangeOrdenar}>
        <option value={"nome"}>Ordem Alfabética</option>
        <option value={"menor"}>Menor Preço</option>
        <option value={"maior"}>Maior Preço</option>
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
          .sort((produtoA, produtoB) =>{
            switch (this.state.ordena) {
              case "maior":
                return produtoB.preco - produtoA.preco
              case "menor":
                return produtoA.preco - produtoB.preco
              default:
                return produtoA.nome.localeCompare(produtoB.nome)
            }
          })
          .map(produto => {
            return <Itens key = {produto.key} produto={produto} />
          })}
      </Container>  
      </>
     )
  }
}

export default App;