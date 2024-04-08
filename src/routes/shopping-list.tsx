import React, { useState } from "react";
import styled from "styled-components";
import { CardShoppingList } from "../components/CardShoppingList";
import { lists, userList } from "../data";
import { TList } from "../types";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  // TODO: вытащить данные из телеги

  const userId = "33";
  const dataList = userList.filter((item) => item.user_id === userId);
  const mappedList: TList[] = [];
  dataList.forEach((item) => {
    const data = lists.find((item_list) => item_list.id === item.list_id);
    if (!data) {
      return;
    }
    mappedList.push(data);
  });
  //   const contact = await getContact(params.contactId);
  //   if (!contact) {
  //     throw new Response("", {
  //       status: 404,
  //       statusText: "NotFound",
  //     });
  //   }
  return { lists: mappedList };
}

const Container = styled.div``;
const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
`;

export const ShoppingList = () => {
  const { lists } = useLoaderData() as { lists: TList[] };
  return (
    <Container>
      {lists.length === 0 && <div>у вас нет списков покупок</div>}
      {lists.length !== 0 && (
        <ContainerList>
          {lists.map((item: TList) => (
            <CardShoppingList key={item.id} list={item} />
          ))}
        </ContainerList>
      )}
    </Container>
  );
};
