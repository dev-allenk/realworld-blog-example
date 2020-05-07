import styled, { keyframes } from "styled-components";
import { MAIN_BLUE, MAIN_BLUE_RGB } from "@constants/colors";
import { TLoader } from "./Loader";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

export const Loader = styled.div<TLoader>`
  margin: 16px auto;
  width: ${({ size = 40, unit = "px" }) => size + unit};
  height: ${({ size = 40, unit = "px" }) => size + unit};
  border: 3px solid rgba(${MAIN_BLUE_RGB}, 0.3);
  border-top-color: ${MAIN_BLUE};
  border-radius: 50%;
  animation: ${spin} 1s infinite;
`;
