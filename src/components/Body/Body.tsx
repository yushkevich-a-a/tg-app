import React from "react";
import styled from "styled-components";
import { BayList } from "../BayList";

const Container = styled.div``;
const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
`;

export const Body = () => {
  const list: any[] = [1, 2, 3, 4];
  return (
    <Container>
      {list.length === 0 && <div>у вас нет списков покупок</div>}
      {list.length !== 0 && (
        <ContainerList>
          {list.map((item: any) => (
            <BayList key={item} list={item} />
          ))}
        </ContainerList>
      )}
    </Container>
  );
};
