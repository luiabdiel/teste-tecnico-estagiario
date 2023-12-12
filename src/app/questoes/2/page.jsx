"use client"

import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;

  margin-top: 60px;

  p {
    margin-bottom: 12px;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;

    cursor: pointer;

    background-color: green;

    &:hover {
      background-color: #007400;
    }
  }


  button:nth-of-type(2) {
      background-color: red;

      &:hover {
        background-color: #b90000;
      }
    }

  button + button {
    margin-left: 10px;
  }
`

export default function Questao2() {
  const [count, setCount] = useState(0)

  function updateCountOnReload() {
    setCount(10)
  }

  useEffect(updateCountOnReload, [])

  function increment() {
    setCount((prevCount) => prevCount + 1)
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>
      <Container>
        <h1>Contador</h1>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </Container>
    </>
  );
}
