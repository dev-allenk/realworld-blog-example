import React from "react";
import AuthorMeta from "@components/AuthorMeta";

const image = "";
const username = "allen";
const createdAt = "unkwon";
export default function ArticleHeader() {
  return (
    <div>
      <AuthorMeta src={image} username={username} createdAt={createdAt} />
    </div>
  );
}
