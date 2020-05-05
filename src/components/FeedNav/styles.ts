import styled from "styled-components";
import { MAIN_BLUE } from "@constants/colors";

interface TTab {
  isActive: boolean;
}

export const FeedNav = styled.nav`
  display: flex;
`;

export const Tab = styled.a<TTab>`
  padding: 16px;
  outline: none;
  border: none;
  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${MAIN_BLUE}` : "none"};
  background-color: #fff;
  color: ${({ isActive }) => (isActive ? MAIN_BLUE : "#000")};
  cursor: default;
  &:hover {
    color: ${MAIN_BLUE};
  }
`;
