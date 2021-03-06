import styled from "styled-components";
import {
  MAIN_BLUE,
  GREY_3,
  GREY_5,
  GREY_7,
  MAIN_BLUE_LIGHT,
} from "../../constants/colors";
import { MAX_WIDTH } from "@constants/mediaqueries";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${GREY_3};
  margin: 0 auto;
  max-width: ${MAX_WIDTH.HEADER};
`;

const Title = styled.h2`
  margin: 0;
  padding: 8px 16px;
  color: ${MAIN_BLUE};
  &:hover {
    color: ${MAIN_BLUE_LIGHT};
    cursor: pointer;
  }
`;

const Link = styled.a`
  padding: 0 8px;
  border: none;
  color: ${GREY_5};
  background-color: transparent;
  &:hover {
    color: ${GREY_7};
    cursor: pointer;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

export default { Wrapper, Title, Link, LinkWrapper };
