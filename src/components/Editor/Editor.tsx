import React, { useReducer, useMemo, useEffect } from "react";
import S from "./editorStyles";
import Button from "@components/Button";
import useInput from "@hooks/useInput";
import Tags from "./Tags";
import useValidation from "@hooks/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { createRequest, resetStatus, updateArticle } from "@modules/article";
import { useRouter } from "next/router";
import { RootState } from "@modules";
import Loader from "@components/Loader";
import Modal from "@components/Modal";
import path from "@constants/routingPaths";
import { ParsedUrlQuery } from "querystring";

interface Action {
  type: string;
  payload: string | string[];
}

function reducer(tagList: string[], { type, payload }: Action): string[] {
  if (type === "add") {
    return [...tagList, payload as string];
  }
  if (type === "remove") {
    return tagList.filter((tag) => tag !== tagList[Number(payload)]);
  }
  if (type === "replace") {
    return payload as string[];
  }
  return tagList;
}

function isDuplicateTag(tagList: string[], tag: string) {
  return tagList.includes(tag);
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
  const { query } = router;
  const isEditPage = (query: ParsedUrlQuery) => query.slug !== "new";
  const [tagList, dispatchTag] = useReducer(reducer, []);
  const { inputValue, handleChange, forceChange } = useInput({});
  const { title, description, body, tag } = inputValue;

  const memoizedValue = useMemo(() => ({ title, description, body }), [
    title,
    description,
    body,
  ]);

  const [status, isAllValid] = useValidation(memoizedValue, isValid);
  const dispatch = useDispatch();
  const { isCreated, isLoading, article } = useSelector(
    (state: RootState) => state.article
  );

  useEffect(() => {
    if (!isEditPage(query)) return;
    const { title, description, body, tagList } = article;
    forceChange({ title, description, body });
    dispatchTag({ type: "replace", payload: tagList });
  }, [query]);

  useEffect(() => {
    if (!isCreated) return;
    router.push(path.article, path.articleAs(article.slug));
    dispatch(resetStatus());
  }, [isCreated]);

  const submit = () => {
    isEditPage(query)
      ? dispatch(
          updateArticle.request({
            slug: query.slug as string,
            article: { title, description, body, tagList },
          })
        )
      : dispatch(
          createRequest({ article: { title, description, body, tagList } })
        );
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    forceChange({ tag: "" });

    if (!tag || isDuplicateTag(tagList, tag)) return;
    dispatchTag({ type: "add", payload: tag });
  };

  const removeTag = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatchTag({ type: "remove", payload: currentTarget.dataset.idx! });
  };
  return (
    <>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : (
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
            isValid={true} //TODO: styled-components 내부에서 디폴트값 설정.
          />
          <Tags tagList={tagList} onClick={removeTag} />
          <Button type="button" disabled={!isAllValid()} onClick={submit}>
            Publish Article
          </Button>
        </S.Wrapper>
      )}
    </>
  );
}
