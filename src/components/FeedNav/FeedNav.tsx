import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    isEmpty(query) ? setActiveIndex(1) : setActiveIndex(0);
  }, [query]);

  const maps = [
    {
      path: `/?follow=${username}`,
      tabName: "Your Feed",
      queryKey: "follow",
    },
    { path: "/", tabName: "Global Feed", queryKey: "" },
  ];

  return (
    <S.FeedNav>
      {maps.map(({ path, tabName }, idx) => (
        <Link href={path}>
          <S.Tab key={tabName} isActive={activeIndex === idx} data-index={idx}>
            {tabName}
          </S.Tab>
        </Link>
      ))}
    </S.FeedNav>
  );
}
