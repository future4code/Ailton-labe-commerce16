import './App.css';
import React, { Component } from 'react'
import styled from 'styled-components'

const CardProduct = styled.div `
  border: 1px solid black;
  width: 10vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  padding: 10px;

`

const Container = styled.div `
display: flex;
justify-content: center;
gap: 10px;
margin-top: 10px;
`


export class Home extends Component {
  render() {

    return (
      <div className='container'>
        <div className='top'>
          <p> Quantidade de produtos x </p>
          <label> Ordenação: </label>
          <select>
            <option value={"crescente"}>Crescente</option>
            <option value={"decrescente"}>Decrescente</option>
          </select>
        </div>
        <Container>
        <CardProduct className='card'>
          <img src='https://picsum.photos/200/300'></img>
          <h4> Produto 1 </h4>
          <p> Preço $100 </p>
          <button> Adicionar ao carrinho </button>
        </CardProduct>
        <CardProduct className='card'>
          <img src='https://picsum.photos/200/300'></img>
          <h4> Produto 2 </h4>
          <p> Preço $100 </p>
          <button> Adicionar ao carrinho </button>
        </CardProduct>
        <CardProduct className='card'>
          <img src='https://picsum.photos/200/300'></img>
          <h4> Produto 3 </h4>
          <p> Preço $100 </p>
          <button> Adicionar ao carrinho </button>
        </CardProduct>
        <CardProduct className='card'>
          <img src='https://picsum.photos/200/300'></img>
          <h4> Produto 4 </h4>
          <p> Preço $100 </p>
          <button> Adicionar ao carrinho </button>
        </CardProduct>
        </Container>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
