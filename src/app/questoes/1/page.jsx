"use client"

import styled from "styled-components";

const ButtonRed = styled.button`
  background-color: red;
  
  border: none;
  border-radius: 4px;
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  
  &:hover {
    background-color: #b90000;
  }
`

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
`

export default function Questao1() {
  function handleClick() {
    alert("O botão foi clicado!")
  }

  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba &#34;Clique-me!&#34;
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
      </p>
      <BtnContainer>
        <ButtonRed onClick={handleClick}>Clique-me!</ButtonRed>
      </BtnContainer>
    </>
  );
}
