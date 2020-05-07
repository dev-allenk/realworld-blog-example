import React from "react";
import * as S from "./styles";

export interface TLoader {
  size?: string | number;
  unit?: string;
}

export default function Loader(props: TLoader) {
  return <S.Loader {...props}></S.Loader>;
}
