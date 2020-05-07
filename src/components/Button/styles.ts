import styled from "styled-components";
import { MAIN_BLUE, MAIN_BLUE_DARK } from "@constants/colors";

const Button = styled.button`
  padding: 16px 24px;
  background-color: ${MAIN_BLUE};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${MAIN_BLUE_DARK};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 8px 0;
`;
export default { Button, ButtonWrapper };
