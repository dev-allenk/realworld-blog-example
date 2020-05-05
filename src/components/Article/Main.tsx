import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSingleArticle } from "@modules/article";
import { useRouter } from "next/router";

export default function Main() {
  const { asPath } = useRouter();
  const slug = asPath.replace("/article/", "");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleArticle.request(slug));
  }, []);

  return <div>this is main</div>;
}
