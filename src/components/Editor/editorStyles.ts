import styled from "styled-components";
import { GREY_4 } from "@constants/colors";
import Flex from "../Layout/Flex";
import { responsiveLayout } from "@components/Layout/Container";
import { SInput, STextArea } from "@components/TextBox";

interface Validity {
  isValid?: boolean;
  isEmpty?: boolean;
}
const Wrapper = styled(Flex.VerticalCenter)`
  ${responsiveLayout}
  padding: 16px;
`;
const Input = styled(SInput)<Validity>`
  box-shadow: ${({ isEmpty, isValid }) =>
    isEmpty || isValid ? "none" : "0 0 0 4px red"};
`;

const TextArea = styled(STextArea)`
  padding: 16px;
`;

export default {
  Wrapper,
  Input,
  TextArea,
};
