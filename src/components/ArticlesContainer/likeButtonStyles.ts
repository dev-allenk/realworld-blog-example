import styled from "styled-components";
import { MAIN_BLUE } from "@constants/colors";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px 0 16px;
  border: 1px solid ${MAIN_BLUE};
  border-radius: 5px;
`;

export const Heart = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${MAIN_BLUE};
  transform: rotate(-45deg);
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${MAIN_BLUE};
    border-radius: 50%;
  }
  &::before {
    top: -4px;
    left: 0;
  }
`;

export const Span = styled.span`
  margin-left: 8px;
  color: ${MAIN_BLUE};
`;
