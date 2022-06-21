import React from 'react';
import './App.css';
import produtosList from "./Components/data/produtos.json"
import styled from 'styled-components';
import { Itens, Container, Button } from './Components/Itens' 

const LocalDoFiltro = styled.div`
  border: 1px solid black;
  width: 25vw;
  padding: 8px;
`;

const LocalDosItens = styled.div`
  border: 1px solid black;
  height: 90vh;
  width: 50vw;
  margin-left: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const LocalDoCarrinho = styled.div`
  border: 1px solid black;
  width: 25vw;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const TopItens = styled.div `
width: 100vw;
height: 50px;
display: flex;
flex-wrap: wrap;
align-content: flex-start;
justify-content: space-between;
`

const BottomItens = styled.div`
width: 100vw;
display: flex;
justify-content: center;
`

const FotoCarrinho = styled.img `
width: 50px;
height: 50px;
`

const ProductCarrinho = styled.div `
border: 1px solid black;
margin: 8px;
padding: 8px;
display: flex;
flex-wrap: wrap;
align-content: flex-start;
align-items: center;
`
const CarrinhoContainer =styled.div `
display: flex;
`

const FiltroOrdem = styled.select `
width: 150px;
height: 20px;
`

const TituloItem = styled.h3`
margin-left: 8px;
margin-top: 0;
padding: 0;
`

const TotalCarrinho = styled.h5`
margin: 10px;
`

const PrecoCarrinho = styled.p`
margin: 8px;
`

const ValorTotal = styled.h5`
margin-bottom: 0px;
`

export class App extends React.Component {
  state = {
    produtos: produtosList,
    minimoInput:"",
    carrinho: [],
    totalDoCarrinho: '',
    maximoInput:"",
    produtoInput:'',
    ordena:"nome",
    valorTotal:""
  }

  addToCarrinho = (adicionaCarrinho) => {
    var i;
    for(i=0; i< this.state.carrinho.length; i++){
    if(this.state.carrinho[i].id === adicionaCarrinho.id) {
      this.state.carrinho[i].quantidade ++
       var novaLista = this.state.carrinho
       return this.setState ({carrinho: novaLista})
    }}
    adicionaCarrinho.quantidade = 1
    var novaLista = this.state.carrinho
    novaLista.push(adicionaCarrinho)
    this.setState ({carrinho: novaLista})
  }

  removeToCarrinho = (removeCarrinho) => {
    var i;
    for(i=0; i< this.state.carrinho.length; i++){
    if(this.state.carrinho[i].id === removeCarrinho.id) {
      this.state.carrinho[i].quantidade --
      if(this.state.carrinho[i].quantidade === 0) {
        this.state.carrinho.splice(i,1)
      }
       var novaLista = this.state.carrinho
       return this.setState ({carrinho: novaLista})
    }}
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
    var valorTotal = 0
    for (let i = 0; i < this.state.carrinho.length; i++) {
      valorTotal += this.state.carrinho[i].quantidade * this.state.carrinho[i].preco
    }
     return (
      <>
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
    <LocalDosItens>
      <TopItens>
        <div>
          <TituloItem> Quantidade de produtos: {this.state.produtos.length} </TituloItem>
        </div>
        <div>
          <label for="sort">Ordenar por:</label>
            <FiltroOrdem name="sort" value={this.state.ordena} onChange={this.onChangeOrdenar}>
            <option value={"nome"}>Ordem Alfabética</option>
            <option value={"menor"}>Menor Preço</option>
            <option value={"maior"}>Maior Preço</option>
            </FiltroOrdem>
            </div>
      </TopItens>
      <BottomItens>
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
            return <Itens key = {produto.key} produto={produto} addToCarrinho = {this.addToCarrinho}/>
          })}
          </BottomItens>
      </LocalDosItens>
      <LocalDoCarrinho>
          {this.state.carrinho
            .map(produto => {
            return <ProductCarrinho>        
            <FotoCarrinho src ={produto.img}/>            
            <TituloItem>{produto.nome}</TituloItem>
            <CarrinhoContainer>
            <PrecoCarrinho>Preço R$ {produto.preco} x {produto.quantidade}</PrecoCarrinho> 
            <TotalCarrinho>Valor total: R$ {(produto.preco)*(produto.quantidade)}</TotalCarrinho>
            </CarrinhoContainer>
            <Button onClick={() => this.removeToCarrinho(produto)}>Excluir item</Button>
            </ProductCarrinho>
          })}
          <ValorTotal>Total: R${valorTotal}</ValorTotal>
      </LocalDoCarrinho>
    </Container>

      </>
     )
  }
}

export default App;