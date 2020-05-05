import React, { useState, useEffect, useMemo } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import { isEmpty } from "@utils";
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
    const baseData = [
      { path: `/?follow=${username}`, tabName: "Your Feed" },
      { path: "/", tabName: "Global Feed" },
    ];
    return isLoggedIn ? baseData : [baseData[1]];
  }, [isLoggedIn]);

  useEffect(() => {
    isLoggedIn && isEmpty(query) ? setActiveIndex(1) : setActiveIndex(0);
  }, [query]);

  return (
    <S.FeedNav>
      {maps.map(({ path, tabName }, idx) => (
        <Link key={tabName} href={path}>
          <S.Tab isActive={activeIndex === idx} data-index={idx}>
            {tabName}
          </S.Tab>
        </Link>
      ))}
    </S.FeedNav>
  );
}
