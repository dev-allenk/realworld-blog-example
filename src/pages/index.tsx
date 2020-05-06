import Banner from "@components/Banner";
import ArticlesContainer from "@components/ArticlesContainer";
import FeedNav from "@components/FeedNav";
import Pagination from "@components/Pagination";

export default function Home() {
  return (
    <>
      <Banner />
      <FeedNav />
      <ArticlesContainer />
      <Pagination />
    </>
  );
}
