import React from "react";
import * as S from "./styles";
import useHover from "@hooks/useHover";

interface Props {
  gear?: boolean;
  pencil?: boolean;
  trashCan?: boolean;
  color?: string;
  onClick?(): void;
}

export default function ButtonWithIcon({
  gear,
  pencil,
  trashCan,
  color,
  onClick,
  children,
}: Props & React.HTMLProps<HTMLButtonElement>) {
  const [isHovered, onHover] = useHover();
  return (
    <S.Button {...onHover} color={color} onClick={onClick}>
      {gear && <Gear isHovered={isHovered} />}
      {pencil && <Pencil isHovered={isHovered} />}
      {trashCan && <TrashCan isHovered={isHovered} />}
      {children}
    </S.Button>
  );
}

function Gear({ isHovered }: { isHovered: boolean }) {
  return (
    <S.IconWrapper>
      <S.Gear isHovered={isHovered} />
      <S.GearTooth />
      <S.GearTooth />
      <S.GearTooth />
      <S.GearTooth />
    </S.IconWrapper>
  );
}
function Pencil({ isHovered }: { isHovered: boolean }) {
  return (
    <S.IconWrapper>
      <S.Pencil isHovered={isHovered} />
    </S.IconWrapper>
  );
}
function TrashCan({ isHovered }: { isHovered: boolean }) {
  return (
    <S.IconWrapper>
      <S.TrashCan isHovered={isHovered}>
        <div className="trash-lid"></div>
        <div className="trash-container"></div>
        <div className="trash-line-1"></div>
        <div className="trash-line-2"></div>
        <div className="trash-line-3"></div>
      </S.TrashCan>
    </S.IconWrapper>
  );
}
