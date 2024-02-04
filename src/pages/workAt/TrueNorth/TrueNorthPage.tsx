import PageWrapper from "../../../components/PageWrapper";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import WorkAtLogo from "../components/WorkAtLogo";
import { sections } from "./sections.ts";

export function TrueNorthPage() {
  return (
    <PageWrapper title="Work at TrueNorth">
      <WorkAtTemplate
        content={<Content />}
        employer="TrueNorth Technologies"
        logo={<WorkAtLogo brand="truenorth" variant="default" />}
        role={<>Team Lead & Staff Frontend Software Engineer</>}
        sections={sections}
        when="March 2021 to March 2023"
        where="San Francisco, CA, USA"
      />
    </PageWrapper>
  );
}

export default TrueNorthPage;
