import styled from "styled-components";
import { GREY_3, MAIN_BLUE } from "@constants/colors";

interface TButton {
  isActive?: boolean;
}

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const Button = styled.button<TButton>`
  width: 32px;
  height: 32px;
  border: 1px solid ${({ isActive }) => (isActive ? MAIN_BLUE : GREY_3)};
  background-color: ${({ isActive }) => (isActive ? MAIN_BLUE : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  &:hover {
    color: #fff;
    border: 1px solid ${MAIN_BLUE};
    background-color: ${MAIN_BLUE};
  }
`;
