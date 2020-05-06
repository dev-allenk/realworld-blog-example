import React from "react";
import FeedNav from "@components/FeedNav";
import ArticlesContainer from "@components/ArticlesContainer";
import ProfileBanner from "@components/ProfileBanner/ProfileBanner";

export default function Profile() {
  return (
    <div>
      <ProfileBanner />
      <FeedNav />
      <ArticlesContainer />
    </div>
  );
}
