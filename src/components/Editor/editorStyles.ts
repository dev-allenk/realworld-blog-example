import styled from "styled-components";
import { GREY_4 } from "@constants/colors";
import Flex from "../Layout/Flex";

interface Validity {
  isValid?: boolean;
  isEmpty?: boolean;
}
const Wrapper = styled(Flex.VerticalCenter)`
  padding: 16px;
`;

const Input = styled.input<Validity>`
  margin: 8px 0;
  padding: 0 16px;
  width: 90%;
  height: 42px;
  border: 1px solid ${GREY_4};
  border-radius: 5px;
  box-shadow: ${({ isEmpty, isValid }) =>
    isEmpty || isValid ? "none" : "0 0 0 4px red"};
`;
const TextArea = styled.textarea`
  margin: 8px 0;
  padding: 16px;
  width: 90%;
  height: 200px;
  border: 1px solid ${GREY_4};
  border-radius: 5px;
`;

export default {
  Wrapper,
  Input,
  TextArea,
};