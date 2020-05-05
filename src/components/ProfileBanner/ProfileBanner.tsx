import React from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";

function Gear() {
  return (
    <S.GearWrapper>
      <S.Gear />
      <S.GearTooth />
      <S.GearTooth />
      <S.GearTooth />
      <S.GearTooth />
    </S.GearWrapper>
  );
}

export default function ProfileBanner() {
  return (
    <S.Banner>
      <ProfileImage large />
      <h2>username</h2>
      <S.ButtonWrapper>
        <S.Button>
          <Gear />
          Edit Profile Settings
        </S.Button>
      </S.ButtonWrapper>
    </S.Banner>
  );
}
