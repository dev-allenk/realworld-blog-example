import styled from "styled-components";
import Flex from "../Layout/Flex";
import { responsiveLayout } from "@components/Layout/Container";
import { SInput } from "@components/TextBox";

interface Validity {
  isValid: boolean;
  isEmpty: boolean;
}

const Wrapper = styled(Flex.VerticalCenter)`
  padding: 16px;
  ${responsiveLayout}
`;

const Input = styled(SInput)<Validity>`
  position: relative;
  box-shadow: ${({ isEmpty, isValid }) =>
    isEmpty || isValid ? "none" : "0 0 0 4px red"};
`;

export default { Wrapper, Input };
