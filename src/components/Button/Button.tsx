import React from "react";
import S from "./styles";

export default function Button({
  children,
  disabled,
  onClick,
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <S.ButtonWrapper>
      <S.Button disabled={disabled} onClick={onClick}>
        {children}
      </S.Button>
    </S.ButtonWrapper>
  );
}
