import React from "react";
import FeedNav from "@components/FeedNav";
import ArticlesContainer from "@components/ArticlesContainer";
import ProfileBanner from "@components/ProfileBanner/ProfileBanner";
import Pagination from "@components/Pagination";

export default function Profile() {
  return (
    <div>
      <ProfileBanner />
      <FeedNav />
      <ArticlesContainer />
      <Pagination />
    </div>
  );
}
