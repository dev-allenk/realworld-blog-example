import styled from "styled-components";

interface TImage {
  size: number;
}

const Image = styled.img<TImage>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: none;
  border-radius: 50%;
`;

export default { Image };
