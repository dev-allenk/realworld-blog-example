import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useRouter } from "next/router";
import { isEmpty } from "@utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@modules";
import { getRequest } from "@modules/article";

const TabNames = ["Your Feed", "Global Feed"];

export default function FeedNav() {
  const router = useRouter();
  const { pathname, query } = router;
  const [activeIndex, setActiveIndex] = useState(0);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number(currentTarget.dataset.index);
    router.push({ pathname: "/", query: index ? {} : { follow: "allen" } });
    dispatch(getRequest({ shouldGetFeeds: index === 0 }));
  };

  useEffect(() => {
    isEmpty(query) ? setActiveIndex(1) : setActiveIndex(0);
  }, [query]);

  return (
    <S.FeedNav>
      {TabNames.map((tabName, idx) => (
        <S.Tab
          key={tabName}
          isActive={activeIndex === idx}
          data-index={idx}
          onClick={handleClick}
        >
          {tabName}
        </S.Tab>
      ))}
    </S.FeedNav>
  );
}
