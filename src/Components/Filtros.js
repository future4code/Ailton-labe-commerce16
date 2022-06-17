import React from "react";
import styled from "styled-components";

const LocalDoFiltro = styled.div`
  border: 1px solid black;
  width: 350px;
  margin-left: 20px;
`;

class Filtros extends React.Component {
  state = {
    minimoInput:100,
    maximoInput:1000,
    produtoInput:''
  };
  // const setFiltroProduto = produtos.filter ((nome) => {
  //   if (nome === onChangeProduto)
  // return produto
  // })
  // const setFiltroValor = produto.filter((valor) => {
        
  //   if(valor>onChangeMinimo && valor<onChangeMaximo ) {
  //       return produto;
  //   }
  // })
  onChangeMinimo =(event) =>{
    console.log('minimo');
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
      <LocalDoFiltro>
        <h2>Filtro</h2>
        <p>Valor minimo</p>
        <input type={'number'}  value={this.state.minimoInput} onChange = {this.onChangeMinimo} />
        <p>Valor maximo</p>
        <input  type={'number'}  value={this.state.maximoInput} onChange = {this.onChangeMaximo} />
        <p>Por nome</p>
        <input placeholder={"Produto"} value={this.state.produtoInput} onChange = {this.onChangeProduto} />
      </LocalDoFiltro>
    );
  }
}

export default Filtros;
