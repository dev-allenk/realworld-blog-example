import React from "react";
import S from "./tagStyles";

interface TagProps {
  idx: number;
}

interface TagsProps {
  tagList: string[];
}

function Tag({
  onClick,
  children,
  idx,
}: TagProps & React.HTMLProps<HTMLButtonElement>) {
  return (
    <S.Tag>
      <S.XButton type="button" data-idx={idx} onClick={onClick} />
      <span>{children}</span>
    </S.Tag>
  );
}

export default function Tags({
  tagList = [],
  onClick,
}: TagsProps & React.HTMLProps<HTMLButtonElement>) {
  return (
    <S.Wrapper>
      {tagList.map((tag, idx) => (
        <Tag key={tag} idx={idx} onClick={onClick}>
          {tag}
        </Tag>
      ))}
    </S.Wrapper>
  );
}
