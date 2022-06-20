import './App.css';
import produtosList from "./Components/data/produtos.json"
import Filtros from './Components/Filtros';
import { Home } from './Components/Home'


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
          <p>{quantidade}</p>
           { /*quantidade vem do botão adicionar*/ }
          <button onClick={() => this.apagarProduto(index)}>Remover</button>
          <p>Valor Total:{valorTotal}</p>
        </Container>
      );
    });
    return (
      <div>
      {renderizaProdutos}
      </div>
     )
  }
}

export default App;
