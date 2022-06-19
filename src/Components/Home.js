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



export function Home (props) {
    return (
      <Container>
        <CardProduct
        img = {props.produto.img}
        nome = {props.produto.nome}
        preco = {props.produto.preco}></CardProduct>
      </Container>
    )
  }
