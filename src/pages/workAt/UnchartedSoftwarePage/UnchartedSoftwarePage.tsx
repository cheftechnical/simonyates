import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.ts";

export default function UnchartedSoftwarePage() {
  return (
    <PageWrapper title="Work at Uncharted Software">
      <WorkAtTemplate
        content={<Content />}
        employer="Uncharted Software"
        logo={<WorkAtLogo brand="uncharted-software" variant="default" />}
        role="Senior Software Architect"
        sections={sections}
        when="May 2016 to 2018"
        where="Toronto, Canada"
      />
    </PageWrapper>
  );
}
