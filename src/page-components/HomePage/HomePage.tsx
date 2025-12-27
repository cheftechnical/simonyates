import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import Content from "./Content";

export function Home() {
  return (
    <PageWrapper>
      <MyContainer fullHeight>
        <Content />
      </MyContainer>
    </PageWrapper>
  );
}

export default Home;
