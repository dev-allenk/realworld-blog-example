import styled from "styled-components";
import { MAIN_BLUE, GREY_5 } from "@constants/colors";

export const Meta = styled.div`
  display: flex;
`;
export const MetaInfo = styled.div`
  padding: 0 8px;
`;
export const Username = styled.div`
  color: ${MAIN_BLUE};
  cursor: pointer;
`;

export const Date = styled.span`
  color: ${GREY_5};
`;
