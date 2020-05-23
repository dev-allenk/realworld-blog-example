import React, { useEffect } from "react";
import * as S from "./styles";
import ProfileImage from "@components/ProfileImage";
import Link from "next/link";
import path from "@constants/routingPaths";
import { useRouter } from "next/router";
import { ButtonWithIcon } from "@components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@modules";
import { getProfile } from "@modules/profile";

export default function ProfileBanner() {
  const {
    query: { author },
  } = useRouter();

  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile.request(author as string));
  }, [author]);

  return (
    <S.Banner>
      <S.BannerInnerWrapper>
        <ProfileImage large src={profile.image} />
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
