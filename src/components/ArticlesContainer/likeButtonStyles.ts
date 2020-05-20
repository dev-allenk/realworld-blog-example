import styled from "styled-components";
import { MAIN_BLUE } from "@constants/colors";

interface TButton {
  isHovered?: boolean;
  favorited?: boolean;
}

export const Button = styled.button<TButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px 0 16px;
  border: 1px solid
    ${({ favorited, isHovered }) =>
      favorited || isHovered ? "none" : MAIN_BLUE};
  border-radius: 5px;
  background-color: ${({ favorited, isHovered }) =>
    favorited || isHovered ? MAIN_BLUE : "#fff"};
`;

export const Heart = styled.div<TButton>`
  width: 8px;
  height: 8px;
  background-color: ${({ favorited, isHovered }) =>
    favorited || isHovered ? "#fff" : MAIN_BLUE};
  transform: rotate(-45deg);
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${({ favorited, isHovered }) =>
      favorited || isHovered ? "#fff" : MAIN_BLUE};
    border-radius: 50%;
  }
  &::before {
    top: -4px;
    left: 0;
  }
`;

export const Span = styled.span<TButton>`
  margin-left: 8px;
  color: ${({ favorited, isHovered }) =>
    favorited || isHovered ? "#fff" : MAIN_BLUE};
`;
