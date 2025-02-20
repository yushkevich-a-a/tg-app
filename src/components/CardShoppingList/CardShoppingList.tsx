import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { TList } from "../../types";
import { Link } from "react-router-dom";

const Container = styled(Card)`
  width: "18rem";
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;
  &:hover {
    box-shadow: -2px -2px 10px -5px #06f84f, 2px 2px 10px -5px #06f84f,
      2px -2px 10px -5px #06f84f, -2px 2px 10px -5px #06f84f;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;
// TODO: добавить общие типы для списка и для предмета списка
export const CardShoppingList = ({ list }: { list: TList }) => {
  return (
    <Link to={`/list/${list.id}`}>
      <Container>
        {
          //попробовать и влепить рандомное изображение))
        }
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{list.title}</Card.Title>
          <Card.Text>{list.description || "нет описания"}</Card.Text>
          {
            // кнопки управления поделиться списком, удалить список, редактировать мета списка,
          }
          <Actions>
            <Button variant="outline-primary" size="sm">
              поделиться
            </Button>
            <Button variant="outline-primary" size="sm">
              удалить
            </Button>
            <Button variant="outline-primary" size="sm">
              редактировать
            </Button>
          </Actions>
        </Card.Body>
      </Container>
    </Link>
  );
};
