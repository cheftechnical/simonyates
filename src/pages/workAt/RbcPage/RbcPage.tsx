import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.tsx";

export default function RbcPage() {
  return (
    <PageWrapper title="Work at RBC">
      <WorkAtTemplate
        content={<Content />}
        employer="RBC"
        logo={<WorkAtLogo brand="rbc" variant="default" />}
        role={
          <>
            Product Manager / Lead Software Engineer,
            Site&nbsp;Reliability&nbsp;Engineering
          </>
        }
        sections={sections}
        when="July 2018 to March 2021"
        where="Toronto, Canada"
      />
    </PageWrapper>
  );
}
