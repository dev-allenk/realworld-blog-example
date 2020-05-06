import styled from "styled-components";
import { GREY_5, GREY_3 } from "@constants/colors";

const Container = styled.div`
  padding: 0 16px;
`;

const PreviewContainer = styled.ol`
  margin: 0;
  padding: 0;
`;

const PreviewItemWrapper = styled.li`
  padding: 16px 0;
  list-style-type: none;
  border-top: 1px solid ${GREY_3};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.h2`
  margin: 16px 0 8px 0;
`;
const Desc = styled.p`
  margin: 0;
  margin-bottom: 24px;
  color: ${GREY_5};
`;
const ReadMore = styled.span`
  color: ${GREY_5};
`;

export default {
  Container,
  PreviewContainer,
  PreviewItemWrapper,
  Header,
  Link,
  Title,
  Desc,
  ReadMore,
};
