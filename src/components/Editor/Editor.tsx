import React from "react";
import S from "./editorStyles";
import Button from "@components/Button";
import useInput from "@hooks/useInput";
import Tags from "./Tags";

export default function Editor() {
  const { inputValue, handleChange } = useInput({});
  const { title, subject, contents, tags } = inputValue;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Wrapper>
      <form onSubmit={submit}>
        <S.Input
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Article Title"
        />
        <S.Input
          name="subject"
          value={subject}
          onChange={handleChange}
          placeholder="What's this article about?"
        />
        <S.TextArea
          name="contents"
          value={contents}
          onChange={handleChange}
          placeholder="Write your article (Markdown supported)"
        />
        <S.Input
          name="tags"
          value={tags}
          onChange={handleChange}
          placeholder="Enter tags"
        />
        <Tags />
        <Button type="submit">Publish Article</Button>
      </form>
    </S.Wrapper>
  );
}
