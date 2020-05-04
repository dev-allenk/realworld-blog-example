import styled from "styled-components";
import { MAIN_BLUE } from "@constants/colors";

interface THovered {
  isHovered?: boolean;
}

export const Button = styled.button<THovered>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px 0 16px;
  border: 1px solid ${({ isHovered }) => (isHovered ? "none" : MAIN_BLUE)};
  border-radius: 5px;
  background-color: ${({ isHovered }) => (isHovered ? MAIN_BLUE : "#fff")};
`;

export const Heart = styled.div<THovered>`
  width: 8px;
  height: 8px;
  background-color: ${({ isHovered }) => (isHovered ? "#fff" : MAIN_BLUE)};
  transform: rotate(-45deg);
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${({ isHovered }) => (isHovered ? "#fff" : MAIN_BLUE)};
    border-radius: 50%;
  }
  &::before {
    top: -4px;
    left: 0;
  }
`;

export const Span = styled.span<THovered>`
  margin-left: 8px;
  color: ${({ isHovered }) => (isHovered ? "#fff" : MAIN_BLUE)};
`;
