import styled, { keyframes } from "styled-components";
import { MAIN_BLUE, MAIN_BLUE_RGB } from "@constants/colors";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

interface TLoader {
  width?: string | number;
  height?: string | number;
  unit?: string;
}

export const Loader = styled.div<TLoader>`
  width: ${({ width = 40, unit = "px" }) => width + unit};
  height: ${({ height = 40, unit = "px" }) => height + unit};
  border: 3px solid rgba(${MAIN_BLUE_RGB}, 0.3);
  border-top-color: ${MAIN_BLUE};
  border-radius: 50%;
  animation: ${spin} 1s infinite;
`;
