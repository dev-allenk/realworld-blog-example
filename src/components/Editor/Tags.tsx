import React from "react";
import S from "./tagStyles";

function Tag({ children }: { children: string }) {
  return (
    <S.Tag>
      <S.XButton />
      <span>{children}</span>
    </S.Tag>
  );
}

export default function Tags({ tagList }: { tagList: string[] }) {
  return (
    <S.Wrapper>
      {tagList.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </S.Wrapper>
  );
}
