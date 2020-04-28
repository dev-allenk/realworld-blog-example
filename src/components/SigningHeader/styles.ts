import styled from "styled-components";
import { MAIN_BLUE } from "../../constants/colors";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Link = styled.a`
  color: ${MAIN_BLUE};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default { Wrapper, Link };
