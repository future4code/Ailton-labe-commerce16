import React, { Component }from 'react'
import './App.css';
import produtosList from "./Components/data/produtos.json"
import Filtros from './Components/Filtros';
import { Home } from './Components/Home'

export class App extends Component {
  state = {
    produtos: produtosList
  }
  render() {
     return (
      <div>
        <h3> Quantidade de produtos:{this.state.produtos.length} </h3>
          {this.state.produtos.map(produto => {
            return <Home key = {produto.key} produto={produto} />
          })}
        <Filtros></Filtros>
      </div>
     )
  }
}
export default App;