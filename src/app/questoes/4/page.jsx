"use client"

import styled from "styled-components";

const produtos = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 10.99,
  },
  {
    id: 2,
    nome: "Calça",
    preco: 19.99,
  },
  {
    id: 3,
    nome: "Saia",
    preco: 19.99,
  },
];

const ProductListContainer  = styled.ul`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 16px;
  
  margin-top: 8px;

  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ProductItem = styled.li `
  background-color: #4e4d4d;
  
  padding: 16px;
  border-radius: 4px;

  span {
    color: #00d000;
    font-weight: 700;
  }
`

const ProductContainer = styled.div`
  height: 100%;

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 60px;
  }
`

function ProductList({ productList }) {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductListContainer >
        {productList && productList.map((product) => (
          <ProductItem key={product.id}>
           <p>{product.nome}</p>
           <span>R${product.preco}</span>
          </ProductItem>
        ))}
      </ProductListContainer>
    </div>
  );
}

export default function Questao4() {
  return (
    <ProductContainer>
      <h1>Questão 4</h1>
      <p>
        Crie um componente chamado `ProductList` que recebe uma matriz de
        objetos de produto e renderiza uma lista de produtos. Cada produto deve
        exibir seu nome e preço.
      </p>
      <ProductList productList={produtos} />
    </ProductContainer>
  );
}
