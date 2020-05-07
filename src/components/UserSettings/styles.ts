import styled from "styled-components";
import Flex from "../Layout/Flex";
import { responsiveLayout } from "@components/Layout/Container";
import { SInput, STextArea } from "@components/TextBox";

const Wrapper = styled(Flex.VerticalCenter)`
  padding: 0 16px;
  ${responsiveLayout}
`;

const Input = styled(SInput)`
  margin: 8px 0;
`;

const TextArea = styled(STextArea)`
  margin: 8px 0;
  padding: 16px;
`;

export default {
  Wrapper,
  Input,
  TextArea,
};
