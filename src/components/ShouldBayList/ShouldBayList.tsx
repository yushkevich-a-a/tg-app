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

export const ShouldBayList = ({ list }: { list: TItem[] }) => {
  return (
    <div>
      <Title>Необходимо приобрести: </Title>
      <div className="">
        {list.length === 0 && <div>у вас нет списков покупок</div>}
        {list.length !== 0 && (
          <Container>
            {list.map((item: TItem) => (
              <CardItem key={item.id} item={item} />
            ))}
          </Container>
        )}
      </div>
    </div>
  );
};
