import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper";
import { sectionCollection } from "./sections.ts";

export function InfomartPage() {
  return (
    <PageWrapper title="Work at Infomart">
      <WorkAtTemplate
        content={<Content />}
        employer="Infomart"
        logo={<WorkAtLogo brand="infomart" variant="default" />}
        role="Architect & Lead Developer"
        sections={sectionCollection}
        when="2012–2014"
        where="Toronto, Canada"
      />
    </PageWrapper>
  );
}

export default InfomartPage;