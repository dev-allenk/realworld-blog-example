import React from "react";
import S from "./styles";

export default function Button({
  children,
  disabled,
  onClick,
}: React.HTMLProps<HTMLButtonElement>) {
  return (
    <S.ButtonWrapper>
      <S.Button disabled={disabled} onClick={onClick}>
        {children}
      </S.Button>
    </S.ButtonWrapper>
  );
}
