import React, { useState } from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";
import Link from "next/link";
import path from "@constants/routingPaths";
import { useSelector } from "react-redux";
import { RootState } from "@modules";

function EditButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.GearWrapper>
        <S.Gear isHovered={isHovered} />
        <S.GearTooth />
        <S.GearTooth />
        <S.GearTooth />
        <S.GearTooth />
      </S.GearWrapper>
      Edit Profile Settings
    </S.Button>
  );
}

export default function ProfileBanner() {
  const username = useSelector((state: RootState) => state.auth.username);
  return (
    <S.Banner>
      <ProfileImage large />
      <S.Username>{username}</S.Username>
      <Link href={path.settings}>
        <S.ButtonWrapper>
          <EditButton />
        </S.ButtonWrapper>
      </Link>
    </S.Banner>
  );
}
