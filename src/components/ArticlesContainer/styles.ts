import styled from "styled-components";
import { MAIN_BLUE, GREY_5, GREY_3 } from "@constants/colors";

const Container = styled.div`
  padding: 16px;
`;

const FeedNav = styled.nav`
  display: flex;
`;

const PreviewContainer = styled.ol`
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

const Meta = styled.div`
  display: flex;
`;
const MetaInfo = styled.div`
  padding: 0 8px;
`;
const Username = styled.div`
  color: ${MAIN_BLUE};
`;

const Date = styled.span`
  color: ${GREY_5};
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
  FeedNav,
  PreviewContainer,
  PreviewItemWrapper,
  Header,
  Meta,
  MetaInfo,
  Username,
  Date,
  Title,
  Desc,
  ReadMore,
};