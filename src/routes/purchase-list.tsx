import styled from "styled-components";
import { items, lists, userList } from "../data";
import { TItem, TList } from "../types";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { ShouldBayList } from "../components/ShouldBayList";
import { AlreadyBayList } from "../components/AlreadyBayList";

export async function loader({ params }: LoaderFunctionArgs) {
  // TODO: вытащить данные по пользователю из телеги
  const listId = params.listId;

  // TODO: забрать данные запросом с бэка с базы данных
  const purchaseList = items.filter((item) => item.list_id === listId);
  return { list: purchaseList };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const PurchaseList = () => {
  const { list } = useLoaderData() as { list: TItem[] };
  return (
    <Container>
      {
        // добавить заголовок колличество задач и экшен добавления нового элемента списка
      }
      <ShouldBayList list={list.filter((item) => item.purchased === false)} />
      <AlreadyBayList list={list.filter((item) => item.purchased === true)} />
    </Container>
  );
};
