import { Link, Typography } from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import DefaultLayout from "../layouts/DefaultLayout";
import MyContainer from "../styling/MyContainer";
import Li from "../styling/ListsUnordered/Li";
import Ul from "../styling/ListsUnordered/Ul";

export const Webdev = () => {
  return (
    <DefaultLayout>
      <PageWrapper title="Webdev Notes">
        <MyContainer>
          <Typography paragraph component="h1" variant="primaryH1">
            Webdev Notes
          </Typography>

          <Typography paragraph component="h2" variant="primaryH3">
            Tips &amp; Tricks
          </Typography>

          <Typography paragraph component="p">
            <Ul>
              <Li>
                Assigning a border color to one or more elements during development will help you see their margins
                and&nbsp;padding.
              </Li>
              <Li>
                Use named colors for debugging. They are easy to remember and are generally very contrasting, making
                them easy to see. Afterwards, you can verify that you haven't left any debugging borders in the code by
                looking for usage of named&nbsp;colors.
              </Li>
              <Li>
                Write the date/time in the subject line of test emails; this prevents the stacking of messages
                in&nbsp;Gmail.
              </Li>
            </Ul>
          </Typography>

          <Typography paragraph component="h2" variant="primaryH3">
            React + Typescript
          </Typography>

          <Typography paragraph component="p">
            Cheatsheets for experienced React developers getting started with TypeScript
          </Typography>

          <Link
            href="https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets"
            target="_blank"
          >
            https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
          </Link>
        </MyContainer>
      </PageWrapper>
    </DefaultLayout>
  );
};

export default Webdev;
