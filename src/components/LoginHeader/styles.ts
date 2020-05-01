import styled from "styled-components";
import { MAIN_BLUE } from "@constants/colors";
import Flex from "../Layout/Flex";

const Wrapper = Flex.VerticalCenter;

const Link = styled.a`
  color: ${MAIN_BLUE};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default { Link, Wrapper };
