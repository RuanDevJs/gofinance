import React from 'react';
import * as Styled from "./styles";
interface Category {
  name: string;
  icon: string;
}
export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}
interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Styled.Container>
      <Styled.Title>{data.title}</Styled.Title>
      <Styled.Amount type={data.type}>
        {data.type === 'positive' ? data.amount : `- ${data.amount}`}
      </Styled.Amount>
      <Styled.Footer>
        <Styled.Category>
          <Styled.Icon name={data.category.icon} />
          <Styled.CategoryName>{data.category.name}</Styled.CategoryName>
        </Styled.Category>
        <Styled.Date>
          {data.date}
        </Styled.Date>
      </Styled.Footer>
    </Styled.Container>
  )
}