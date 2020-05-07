import React from "react";
import * as S from "./styles";

export default function Modal({ children }: React.HTMLProps<HTMLDivElement>) {
  return <S.Modal>{children}</S.Modal>;
}
