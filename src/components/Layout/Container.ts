import styled from "styled-components";
import { MAX_WIDTH } from "@constants/mediaqueries";

export const responsiveLayout = `
  margin: 0 auto;
  max-width: ${MAX_WIDTH.PAGE};
`;

export const Container = styled.div`
  ${responsiveLayout}
`;
