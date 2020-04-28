import styled from "styled-components";
import { MAIN_BLUE_DARK, MAIN_BLUE_LIGHT } from "../../constants/colors";
import Flex from "../Layout/Flex";

const Background = styled(Flex.VerticalCenter)`
  height: 200px;
  background: linear-gradient(to right, ${MAIN_BLUE_LIGHT}, ${MAIN_BLUE_DARK});
`;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  cursor: default;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
  cursor: default;
`;

export default { Background, Title, Text };
