
import './App.css';
import React, { Component } from "react";

export default class App extends Component {
  state = {
    listaDeProdutos:[],
    carrinho : []
  }

removerProduto =(produtoId) => {
  const novaLista = this.state.listaDeProdutos.filter((produto) => {
    return produtoId !== produto.id
  })
  this.setState({listaDeProdutos:novaLista})
}

valorTotal = (precoDoProduto) => {
  const precoSoma = this.state.listaDeProdutos.filter((precoAtual) {
    return precoDoProduto + precoAtual   
  })

  this.setState({preco: precoSoma})
}


  render() {
    return (
      <div className='carrinho'>
        <h1>Carrinho</h1>
        <button onClick={this.removerProduto}>Remover</button>
        <p>Valor total: R${this.props.valorTotal}</p>
      </div>
    )
  }
}
