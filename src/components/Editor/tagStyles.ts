import styled from "styled-components";
import { GREY_6 } from "@constants/colors";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  margin: 2px;
  height: 24px;
  padding: 2px 8px;
  color: #fff;
  background-color: ${GREY_6};
  border: none;
  border-radius: 16px;
`;

const XButton = styled.button`
  position: relative;
  padding: 0;
  width: 20px;
  height: 20px;
  border: 0;
  background-color: transparent;
  transition: all 0.25s;
  &:hover {
    transform: rotate(180deg);
  }
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 12px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transform: rotate(-45deg);
  }
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 12px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    transform: rotate(45deg);
  }
`;

export default { Wrapper, Tag, XButton };
