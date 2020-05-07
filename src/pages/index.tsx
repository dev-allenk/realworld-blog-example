import Banner from "@components/Banner";
import ArticlesContainer from "@components/ArticlesContainer";
import FeedNav from "@components/FeedNav";
import Pagination from "@components/Pagination";
import { Container } from "@components/Layout/Container";

export default function Home() {
  return (
    <>
      <Banner />
      <Container>
        <FeedNav />
        <ArticlesContainer />
        <Pagination />
      </Container>
    </>
  );
}
