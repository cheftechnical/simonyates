import PageWrapper from "../../../components/PageWrapper";
import MyContainer from "../../../styling/MyContainer";
import { Typography } from "@mui/material";
import CodeSnippet from "../../../components/CodeSnippet/CodeSnippet.tsx";

const FlexboxPage = () => {
  return (
    <PageWrapper title="Flexbox">
      <MyContainer>
        <Typography component="h1" variant="h1">Flexbox</Typography>

        <Typography component="h2" variant="h2">
          Horizontal
        </Typography>

        <CodeSnippet
          language="language-js"
          source="/libs/flexbox/justify-content.html"
        />

      </MyContainer>
    </PageWrapper>
  )
};

export default FlexboxPage;
