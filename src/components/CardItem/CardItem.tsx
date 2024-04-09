import styled from "styled-components";
import { TItem } from "../../types";
import {
  FaRegTrashCan,
  FaCircleCheck,
  FaCircleMinus,
  FaPencil,
} from "react-icons/fa6";

const Container = styled.div<{ $color_shadow: string }>`
  background-color: #212529;
  box-shadow: -2px -2px 10px -5px ${({ $color_shadow }) => $color_shadow},
    2px 2px 10px -5px ${({ $color_shadow }) => $color_shadow},
    2px -2px 10px -5px ${({ $color_shadow }) => $color_shadow},
    -2px 2px 10px -5px ${({ $color_shadow }) => $color_shadow};
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  gap: 15px;
`;

const CustomButton = styled.div<{ $color: string }>`
  color: ${({ $color }) => $color};
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.2s;
  &:hover {
    border-color: ${({ $color }) => $color};
  }
`;

export const CardItem = ({ item }: { item: TItem }) => {
  return (
    <Container $color_shadow={item.purchased ? "#06f84f" : "#ffd932"}>
      <div className="">{item.title}</div>
      <Actions>
        <CustomButton $color="#0d6efd">
          <FaPencil size={15} />
        </CustomButton>
        {!item.purchased ? (
          <CustomButton $color="#06f84f">
            <FaCircleCheck size={15} />
          </CustomButton>
        ) : (
          <CustomButton $color="#ff0019">
            <FaCircleMinus size={15} />
          </CustomButton>
        )}
        <CustomButton $color="#ff0019">
          <FaRegTrashCan size={15} />
        </CustomButton>
      </Actions>
    </Container>
  );
};
