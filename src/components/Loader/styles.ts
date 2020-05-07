import styled, { keyframes } from "styled-components";
import { MAIN_BLUE, MAIN_BLUE_RGB } from "@constants/colors";
import { TLoader } from "./Loader";

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ].join(",")
    : null;
}

export const Loader = styled.div<TLoader>`
  margin: 16px auto;
  width: ${({ size = 40, unit = "px" }) => size + unit};
  height: ${({ size = 40, unit = "px" }) => size + unit};
  border: 3px solid
    rgba(${({ color }) => (color ? hexToRgb(color) : MAIN_BLUE_RGB)}, 0.3);
  border-top-color: ${({ color }) => color || MAIN_BLUE};
  border-radius: 50%;
  animation: ${spin} 1s infinite;
`;
