import React from 'react';
import produtosList from "../Components/data/produtos.json"
import Filtros from '../Components/Filtros';
import { Home, Container } from './Itens'

export  class Carrinho extends React.Component {
    state = {
    produtos: produtosList,
    carrinho : [],
    minimoInput:100,
    maximoInput:1000,
    produtoInput:''
    }
  
    // valorTotal=() => {
    //   produtosList.preco + produtosList.preco
    // }
  
    render() {
      const renderizaProdutos = this.state.produtos.map((produto, index) => {
        return (
          <Container key={index}>
            <h1>Carrinho</h1>
            <p>{produto.nome}</p>
            <p>{produto.quantidade}x</p>
             { /*quantidade vem do botão adicionar*/ }
            <button onClick={() => this.apagarProduto(index)}>Remover</button>
            <p>Valor Total:{produto.valorTotal}</p>
          </Container>
        );
      });
      return (
        <div>
        </div>
      )
    }
  }    