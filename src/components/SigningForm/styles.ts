import styled from "styled-components";
import Flex from "../Layout/Flex";
import { MAIN_BLUE, GREY_4, MAIN_BLUE_DARK } from "../../constants/colors";

const Wrapper = styled(Flex.VerticalCenter)`
  padding: 16px;
`;

interface Validity {
  isValid: boolean;
  isEmpty: boolean;
}
const Input = styled.input<Validity>`
  position: relative;
  margin: 8px 0;
  padding: 0 16px;
  width: 90%;
  height: 42px;
  border: 1px solid ${GREY_4};
  border-radius: 5px;
  box-shadow: ${({ isEmpty, isValid }) =>
    isEmpty || isValid ? "none" : "0 0 0 4px red"};
`;

const Button = styled.button`
  margin: 8px;
  margin-right: 4px;
  padding: 16px 24px;
  background-color: ${MAIN_BLUE};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${MAIN_BLUE_DARK};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export default { Wrapper, Input, Button, ButtonWrapper };
