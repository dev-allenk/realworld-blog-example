import React from "react";
import S from "./styles";
import { DEFAULT_PROFILE } from "@constants/images";

interface Props {
  src?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const SMALL_SIZE = 32;
const MEDIUM_SIZE = 50;
const LARGE_SIZE = 100;

function calculateSize({ small, medium, large }: Partial<Props>) {
  if (small) return SMALL_SIZE;
  if (medium) return MEDIUM_SIZE;
  if (large) return LARGE_SIZE;
  return SMALL_SIZE;
}

export default function ProfileImage({ small, medium, large, src }: Props) {
  const size = calculateSize({ small, medium, large });
  return <S.Image src={src || DEFAULT_PROFILE} size={size}></S.Image>;
}
