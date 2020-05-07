import styled from "styled-components";
import Flex from "../Layout/Flex";
import { GREY_4 } from "@constants/colors";
import { responsiveLayout } from "@components/Layout/Container";

interface Validity {
  isValid: boolean;
  isEmpty: boolean;
}

const INPUT_MARGIN = "16px";
const INPUT_BORDER = "1px";

const Wrapper = styled(Flex.VerticalCenter)`
  padding: 16px;
  ${responsiveLayout}
`;

const Input = styled.input<Validity>`
  position: relative;
  margin: 8px ${INPUT_MARGIN};
  padding: 0 16px;
  width: calc(100% - (${INPUT_BORDER} + ${INPUT_MARGIN}) * 2);
  height: 42px;
  border: ${INPUT_BORDER} solid ${GREY_4};
  border-radius: 5px;
  box-shadow: ${({ isEmpty, isValid }) =>
    isEmpty || isValid ? "none" : "0 0 0 4px red"};
`;

export default { Wrapper, Input };
