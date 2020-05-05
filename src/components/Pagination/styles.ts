import styled from "styled-components";
import { GREY_3 } from "@constants/colors";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${GREY_3};
  background-color: #fff;
`;
