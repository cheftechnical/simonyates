import PageWrapper from '../../../src/components/PageWrapper';
import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import Li from '../../../src/styling/ListsUnordered/Li';
import Ul from '../../../src/styling/ListsUnordered/Ul';
import MyContainer from '../../../src/styling/MyContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webdev Notes',
  description: 'Web development tips, tricks, and resources',
};

export default function Webdev() {
  return (
    <DefaultLayout>
      <PageWrapper title="Webdev Notes">
        <MyContainer>
          <h1 className="font-primary font-normal text-[54px] leading-[88px] mb-6">
            Webdev Notes
          </h1>

          <h2 className="font-primary font-normal text-xl leading-8 mb-6">
            Tips &amp; Tricks
          </h2>

          <p className="font-primary font-normal text-base leading-normal mb-6">
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
          </p>

          <h2 className="font-primary font-normal text-xl leading-8 mb-6">
            React + Typescript
          </h2>

          <p className="font-primary font-normal text-base leading-normal mb-6">
            Cheatsheets for experienced React developers getting started with TypeScript
          </p>

          <a
            href="https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline hover:underline"
          >
            https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
          </a>
        </MyContainer>
      </PageWrapper>
    </DefaultLayout>
  );
}
