import React from 'react';
import * as Styled from "./styles";

export default function TransactionCard() {
  return (
    <Styled.Container>
      <Styled.Title>Desenvolvimento de site</Styled.Title>
      <Styled.Amount>R$ 12.000,00</Styled.Amount>
      <Styled.Footer>
        <Styled.Category>
          <Styled.Icon name="dollar-sign" />
          <Styled.CategoryName>Vendas</Styled.CategoryName>
        </Styled.Category>
        <Styled.Date>
          13/04/2020
        </Styled.Date>
      </Styled.Footer>
    </Styled.Container>
  )
}