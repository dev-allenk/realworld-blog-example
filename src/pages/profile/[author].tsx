import React from "react";
import FeedNav from "@components/FeedNav";
import ArticlesContainer from "@components/ArticlesContainer";
import ProfileBanner from "@components/ProfileBanner/ProfileBanner";
import Pagination from "@components/Pagination";
import { Container } from "@components/Layout/Container";

export default function Profile() {
  return (
    <>
      <ProfileBanner />
      <Container>
        <FeedNav />
        <ArticlesContainer />
        <Pagination />
      </Container>
    </>
  );
}
