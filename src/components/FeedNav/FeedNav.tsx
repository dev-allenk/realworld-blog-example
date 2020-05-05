import React, { useState, useEffect, useMemo } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@modules";
import Link from "next/link";

export default function FeedNav() {
  const router = useRouter();
  const { pathname, query } = router;
  const [activeIndex, setActiveIndex] = useState(0);

  const { isLoggedIn, username } = useSelector(
    (state: RootState) => state.auth
  );

  const maps = useMemo(() => {
    const mainPage = [
      {
        path: `/?follow=${username}`,
        as: `/?follow=${username}`,
        tabName: "Your Feed",
        queryKey: "follow",
      },
      { path: "/", as: "", tabName: "Global Feed" },
    ];
    const profilePage = [
      {
        path: `/profile/[username]?favorite=true`,
        as: `/profile/${username}?favorite=true`,
        tabName: "Favorited Articles",
        queryKey: "favorite",
      },
      {
        path: `/profile/[username]`,
        as: `/profile/${username}`,
        tabName: "My Articles",
        queryKey: "username",
      },
    ];
    const currentPage = pathname === "/" ? mainPage : profilePage;
    return isLoggedIn ? currentPage : [currentPage[1]];
  }, [isLoggedIn, query]);

  useEffect(() => {
    //TODO: query 변화에 따라 active 탭을 렌더링하는 코드. 보다 단순한 코드로 수정 필요.
    //firstTab이 고유하게 갖는 query값의 존재유무를 활용해서 현재 탭 파악.
    const firstTabQuery = isLoggedIn ? maps[0].queryKey || "" : "";
    const isCurrentQueryMatches = (t: string) => Object.keys(query).includes(t);
    isLoggedIn && !isCurrentQueryMatches(firstTabQuery)
      ? setActiveIndex(1)
      : setActiveIndex(0);
  }, [isLoggedIn, query]);

  return (
    <S.FeedNav>
      {maps.map(({ path, as, tabName }, idx) => (
        <Link key={tabName} href={path} as={as}>
          <S.Tab isActive={activeIndex === idx} data-index={idx}>
            {tabName}
          </S.Tab>
        </Link>
      ))}
    </S.FeedNav>
  );
}
