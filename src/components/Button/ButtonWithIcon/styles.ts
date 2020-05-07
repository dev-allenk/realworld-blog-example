import styled from "styled-components";
import { GREY_2, GREY_6, GREY_4, RED_DARK } from "@constants/colors";

const BUTTON_HOVERED_COLOR = GREY_4;
const BUTTON_DEFAULT_COLOR = GREY_6;
const TRASH_CAN_COLOR = RED_DARK;

interface TIcon {
  isHovered: boolean;
}
interface TButton {
  color?: string;
}
export const Button = styled.button<TButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 4px;
  padding: 4px 8px;
  color: ${({ color }) => color || BUTTON_DEFAULT_COLOR};
  border: 1px solid ${({ color }) => color || BUTTON_DEFAULT_COLOR};
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: ${BUTTON_HOVERED_COLOR};
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  margin: 0 8px;
`;

export const Gear = styled.div<TIcon>`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 0px;
  left: 0px;

  border: 2px solid ${BUTTON_DEFAULT_COLOR};
  border-radius: 50%;
  background-color: ${({ isHovered }) =>
    isHovered ? BUTTON_HOVERED_COLOR : GREY_2};
  z-index: 1;
`;

export const GearTooth = styled.div`
  position: absolute;
  width: 16px;
  height: 2px;
  top: 5px;
  left: -2px;
  background-color: ${BUTTON_DEFAULT_COLOR};
  &:nth-child(2) {
    transform: rotate(45deg);
  }

  &:nth-child(3) {
    transform: rotate(90deg);
  }

  &:nth-child(4) {
    transform: rotate(135deg);
  }
`;

export const Pencil = styled.div<TIcon>`
  position: relative;
  width: 4px;
  height: 16px;
  background: ${BUTTON_DEFAULT_COLOR};
  transform: rotate(35deg);

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 4px;
    height: 4px;
    background: ${BUTTON_DEFAULT_COLOR};
  }
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: -2px;
    width: 4px;
    height: 4px;
    background: ${BUTTON_DEFAULT_COLOR};
    transform: rotate(45deg);
    border-radius: 45%;
  }
`;

export const TrashCan = styled.div<TIcon>`
  width: 22px;
  height: 24px;
  position: absolute;
  overflow: hidden;
  top: -6px;
  left: -8px;

  .trash-lid {
    width: 62%;
    height: 10%;
    position: absolute;
    left: 50%;
    margin-left: -31%;
    top: 10.5%;
    background-color: ${TRASH_CAN_COLOR};
    border-top-left-radius: 80%;
    border-top-right-radius: 80%;
    transform: rotate(-5deg);
  }

  .trash-lid:after {
    content: "";
    width: 26%;
    height: 100%;
    position: absolute;
    left: 50%;
    margin-left: -13%;
    margin-top: -10%;
    background-color: inherit;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
    transform: rotate(-1deg);
  }
  .trash-container {
    width: 56%;
    height: 65%;
    position: absolute;
    left: 50%;
    margin-left: -28%;
    bottom: 10%;
    background-color: ${TRASH_CAN_COLOR};
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
  }

  .trash-container:after {
    content: "";
    width: 110%;
    height: 12%;
    position: absolute;
    left: 50%;
    margin-left: -55%;
    top: 0;
    background-color: inherit;
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
  }

  .trash-line-1 {
    width: 4%;
    height: 50%;
    position: absolute;
    left: 38%;
    margin-left: -2%;
    bottom: 17%;
    background-color: #252527;
  }
  .trash-line-2 {
    width: 4%;
    height: 50%;
    position: absolute;
    left: 50%;
    margin-left: -2%;
    bottom: 17%;
    background-color: #252527;
  }
  .trash-line-3 {
    width: 4%;
    height: 50%;
    position: absolute;
    left: 63%;
    margin-left: -2%;
    bottom: 17%;
    background-color: #252527;
  }
`;
