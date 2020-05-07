import styled from "styled-components";
import { GREY_4 } from "@constants/colors";

const MARGIN = "16px";
const BORDER = "1px";

const COMMON_ATTRIBUTES = `
  margin: 8px ${MARGIN};
  padding: 0 16px;
  width: calc(100% - (${BORDER} + ${MARGIN}) * 2);
  border: ${BORDER} solid ${GREY_4};
  border-radius: 5px;
`;

export const SInput = styled.input`
  ${COMMON_ATTRIBUTES}
  height: 42px;
`;

export const STextArea = styled.textarea`
  ${COMMON_ATTRIBUTES}
  height: 200px;
`;
