import Content from "./Content";
import MyContainer from "../../styling/MyContainer/MyContainer";
import PageWrapper from "../../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <MyContainer fullHeight>
        <Content />
      </MyContainer>
    </PageWrapper>
  );
}
