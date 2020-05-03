import React, { useReducer } from "react";
import S from "./editorStyles";
import Button from "@components/Button";
import useInput from "@hooks/useInput";
import Tags from "./Tags";

function reducer(state: string[], payload: string) {
  return [...state, payload];
}

export default function Editor() {
  const [tagList, addTagToList] = useReducer(reducer, []);
  const { inputValue, handleChange } = useInput({});
  const { title, description, body, tag } = inputValue;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(createArticle({article: {title, description, body, tagList}}))
  };
  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    addTagToList(tag);
    handleChange({ name: "tag", value: "" });
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
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="What's this article about?"
        />
        <S.TextArea
          name="body"
          value={body}
          onChange={handleChange}
          placeholder="Write your article (Markdown supported)"
        />
        <S.Input
          name="tag"
          value={tag}
          onChange={handleChange}
          onKeyDown={addTag}
          placeholder="Enter tags"
        />
        <Tags tagList={tagList} />
        <Button type="submit">Publish Article</Button>
      </form>
    </S.Wrapper>
  );
}
