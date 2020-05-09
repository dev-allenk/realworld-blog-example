import React from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";
import Link from "next/link";
import path from "@constants/routingPaths";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "@components/Button";

export default function ProfileBanner() {
  const {
    query: { author },
  } = useRouter();
  return (
    <S.Banner>
      <S.BannerInnerWrapper>
        <ProfileImage large />
        <S.Username>{author}</S.Username>
        <Link href={path.settings}>
          <S.ButtonWrapper>
            <ButtonWithIcon gear>Edit Profile Settings</ButtonWithIcon>
          </S.ButtonWrapper>
        </Link>
      </S.BannerInnerWrapper>
    </S.Banner>
  );
}
