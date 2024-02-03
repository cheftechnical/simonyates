import Content from "./Content";
import MyContainer from "../../styling/MyContainer/MyContainer";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout fullHeight>
      <MyContainer fullHeight>
        <Content />
      </MyContainer>
    </DefaultLayout>
  );
}
