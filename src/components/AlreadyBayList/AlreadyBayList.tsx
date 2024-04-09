import React from "react";
import { TItem } from "../../types";
import styled from "styled-components";
import { CardItem } from "../CardItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Title = styled.div`
  font-size: 20px;
  text-decoration: underline;
  padding: 0 10px 15px;
`;

export const AlreadyBayList = ({ list }: { list: TItem[] }) => {
  //TODO: оптимизировать и возможно объединить с should bay
  return (
    <div>
      <Title>Уже приобретено</Title>
      <Container>
        {list.length === 0 && <div>у вас нет списков покупок</div>}
        {list.length !== 0 && (
          <div>
            {list.map((item: TItem) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
