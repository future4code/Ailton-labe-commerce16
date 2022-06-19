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

export  class Carrinho extends Component {
  state={
    carrinho : []
  }
  valorTotal=() => {
    produtosList.preco + produtosList.preco
  }

  apagarProduto = (produto) => {
    const novoArray = this.state.produtosList.filter((produto,index) => {
      return produto.quantidade -1
    })

    this.setState({produtosList: novoArray})
  }
  adicionaProduto = () => {
  
  }
  render() {
    const renderizaProdutos = this.state.produtosList.map((produto, index) => {
      return (
        <Container key={index}>
          <h1>Carrinho</h1>
          <p>{produto.nome}</p>
          <p>{quantidade}x</p>
           { /*quantidade vem do botão adicionar*/ }
          <button onClick={() => this.apagarProduto(index)}>Remover</button>
          <p>Valor Total:{valorTotal}</p>
        </Container>
      );
    });
    return (
      <div>

      {renderizaProdutos}
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

