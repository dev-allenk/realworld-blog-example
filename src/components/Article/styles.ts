import styled from "styled-components";
import { GREY_8, GREY_4 } from "@constants/colors";
import { Container } from "@components/Layout/Container";

export const Wrapper = styled(Container)`
  padding: 24px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 16px;
  min-height: 120px;
  background-color: ${GREY_8};
`;

export const HeaderInnerWrapper = styled(Container)`
  width: 100%;
`;

export const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  padding: 0 8px;
`;

export const Title = styled.h1`
  margin: 24px 0;
  color: #fff;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  margin: 32px 0;
  border: none;
  border-top: 1px solid ${GREY_4};
`;
