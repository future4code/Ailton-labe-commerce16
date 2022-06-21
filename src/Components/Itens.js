import styled from "styled-components";
import React from 'react'

export const CardProduct = styled.div `
  border: 1px solid black;
  width: 10vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const Container = styled.div `
display: flex;
justify-content: center;
gap: 10px;
margin-top: 10px;
`;

export const Fotos = styled.img `
width: 10vw;
height: 15vh;
`
export const Button = styled.button`
margin-top: auto;
margin-left: auto;
padding: 0px;
`

export function Itens (props) {
    return (
        <CardProduct>
        <Fotos src={props.produto.img}/>
        <h4>{props.produto.nome}</h4>
        <p>Preço R${props.produto.preco}</p>
        <Button onClick={() => props.addToCarrinho(props.produto)}>Adicionar ao Carrinho</Button>
        </CardProduct>
    )
  }
