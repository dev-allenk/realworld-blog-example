import styled from "styled-components";
import { GREY_2, GREY_4 } from "@constants/colors";
import { Container } from "@components/Layout/Container";

export const Banner = styled.div`
  min-height: 120px;
  padding: 16px;
  background-color: ${GREY_2};
`;

export const BannerInnerWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Username = styled.h3`
  margin: 0;
  margin-top: 16px;
`;

export const ButtonWrapper = styled.a`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;
