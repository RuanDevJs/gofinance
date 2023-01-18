import React from 'react';
import * as Styled from "./styles";
interface Category {
  name: string;
  icon: string;
}
interface TransactionCardProps {
  data: {
    title: string;
    amount: string;
    category: Category;
    date: string;
  }
}

export default function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Styled.Container>
      <Styled.Title>{data.title}</Styled.Title>
      <Styled.Amount>{data.amount}</Styled.Amount>
      <Styled.Footer>
        <Styled.Category>
          <Styled.Icon name="dollar-sign" />
          <Styled.CategoryName>{data.category.name}</Styled.CategoryName>
        </Styled.Category>
        <Styled.Date>
          {data.date}
        </Styled.Date>
      </Styled.Footer>
    </Styled.Container>
  )
}