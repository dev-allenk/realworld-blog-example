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

const tags = ["test1", "test2", "test test", "test3", "test4", "test5"];
export default function Tags() {
  return (
    <S.Wrapper>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </S.Wrapper>
  );
}
