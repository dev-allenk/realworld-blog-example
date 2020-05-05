import React, { useState } from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";

function EditButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.ButtonWrapper>
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
    </S.ButtonWrapper>
  );
}

export default function ProfileBanner() {
  return (
    <S.Banner>
      <ProfileImage large />
      <S.Username>username</S.Username>
      <EditButton />
    </S.Banner>
  );
}
