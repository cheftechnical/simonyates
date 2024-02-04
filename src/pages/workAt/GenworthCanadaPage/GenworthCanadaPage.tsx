import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.ts";

export function GenworthCanada() {
  return (
    <PageWrapper title="Work at Genworth Canada">
      <WorkAtTemplate
        content={<Content />}
        employer="Genworth Canada"
        logo={<WorkAtLogo brand="genworth-canada" variant="default" />}
        role="Developer"
        sections={sections}
        when="July 2014 to January 2015"
        where="Oakville, ON, Canada"
      />
    </PageWrapper>
  );
}

export default GenworthCanada;