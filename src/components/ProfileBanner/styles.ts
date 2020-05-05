import styled from "styled-components";
import { GREY_2, GREY_6, GREY_4 } from "@constants/colors";

interface TGear {
  isHovered: boolean;
}

const BUTTON_HOVERED_COLOR = GREY_4;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 120px;
  padding: 16px;
  background-color: ${GREY_2};
`;

export const Username = styled.h3`
  margin: 0;
  margin-top: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  color: ${GREY_6};
  border: 1px solid ${GREY_6};
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: ${BUTTON_HOVERED_COLOR};
  }
`;

export const GearWrapper = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  margin: 0 8px;
`;

export const Gear = styled.div<TGear>`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 0px;
  left: 0px;

  border: 2px solid ${GREY_6};
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
  background-color: ${GREY_6};
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
