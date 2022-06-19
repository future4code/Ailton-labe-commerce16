import styled from "styled-components";
import React, { Component } from 'react'

export const CardProduct = styled.div `
  border: 1px solid black;
  width: 10vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
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

export function Itens (props) {
    return (
      <Container>
        <CardProduct>
        <Fotos src={props.produto.img}/>
        <h4>{props.produto.nome}</h4>
        <p>Preço R$:{props.produto.preco}</p>
        <button>Adicionar ao Carrinho</button>
        </CardProduct>
      </Container>
    )
  }
