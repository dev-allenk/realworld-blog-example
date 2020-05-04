import React, { useReducer, useMemo, useEffect } from "react";
import S from "./editorStyles";
import Button from "@components/Button";
import useInput from "@hooks/useInput";
import Tags from "./Tags";
import useValidation from "@hooks/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { createRequest, resetStatus } from "@modules/article";
import { useRouter } from "next/router";
import { RootState } from "@modules";

interface Action {
  type: string;
  payload: string;
}

const isValid = {
  title(title: string) {
    return !!title;
  },
  description(description: string) {
    return !!description;
  },
  body(body: string) {
    return !!body;
  },
};

export default function Editor() {
  const router = useRouter();
  const [tagList, dispatchTag] = useReducer(reducer, []);
  const { inputValue, handleChange } = useInput({});
  const { title, description, body, tag } = inputValue;

  const memoizedValue = useMemo(() => ({ title, description, body }), [
    title,
    description,
    body,
  ]);

  const [status, isAllValid] = useValidation(memoizedValue, isValid);
  const dispatch = useDispatch();
  const isCreated = useSelector((state: RootState) => state.article.isCreated);

  useEffect(() => {
    if (!isCreated) return;
    router.push("/"); //TODO: 해당 아티클 페이지로 이동.
    dispatch(resetStatus());
  }, [isCreated]);

  const submit = () => {
    dispatch(createRequest({ article: { title, description, body, tagList } }));
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleChange({ name: "tag", value: "" });

    if (!tag || isDuplicateTag(tagList, tag)) return;
    dispatchTag({ type: "add", payload: tag });
  };

  const removeTag = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatchTag({ type: "remove", payload: currentTarget.dataset.idx! });
  };

  return (
    <S.Wrapper>
      <S.Input
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Article Title"
        {...status.title}
      />
      <S.Input
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="What's this article about?"
        {...status.description}
      />
      <S.TextArea
        name="body"
        value={body}
        onChange={handleChange}
        placeholder="Write your article (Markdown supported)"
        {...status.body}
      />
      <S.Input
        name="tag"
        value={tag}
        onChange={handleChange}
        onKeyDown={addTag}
        placeholder="Enter tags"
        isValid={true}
      />
      <Tags tagList={tagList} onClick={removeTag} />
      <Button type="button" disabled={!isAllValid()} onClick={submit}>
        Publish Article
      </Button>
    </S.Wrapper>
  );
}

function reducer(tagList: string[], { type, payload }: Action) {
  if (type === "add") {
    return [...tagList, payload];
  }
  if (type === "remove") {
    return tagList.filter((tag) => tag !== tagList[Number(payload)]);
  }
  return tagList;
}

function isDuplicateTag(tagList: string[], tag: string) {
  return tagList.includes(tag);
}
