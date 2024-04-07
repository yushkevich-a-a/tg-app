import { Button } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.header`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid grey;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <Container>
      {/* {сделать красивую типографию для заголовка} */}
      {/* {добавить хлебные крошки} */}
      Списки покупок
      <Actions>
        {
          // TODO: Переделать компонент добавления кнопки
          // вынести функционал открытия модального окна в отдельный компонентPP
        }
        <Button variant="outline-primary" size="sm">
          +
        </Button>{" "}
      </Actions>
    </Container>
  );
};
