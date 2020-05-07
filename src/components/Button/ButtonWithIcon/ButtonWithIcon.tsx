import React from "react";
import * as S from "./styles";
import useHover from "@hooks/useHover";

interface Props {
  gear?: boolean;
  pencil?: boolean;
  trashCan?: boolean;
  color?: string;
}

export default function ButtonWithIcon({
  gear,
  pencil,
  trashCan,
  color,
  children,
}: Props & React.HTMLProps<HTMLButtonElement>) {
  const [isHovered, onHover] = useHover();
  return (
    <S.Button {...onHover} color={color}>
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
