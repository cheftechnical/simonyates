import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import { useSections } from "../../../components/Sections/useSections";
import PageWrapper from "../../../components/PageWrapper";

export default function InfomartPage() {
  const [sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Work at Infomart">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange} />}
        employer="Infomart"
        logo={<WorkAtLogo brand="infomart" variant="default" />}
        role="Architect & Lead Developer"
        sections={sections}
        when="2012–2014"
        where="Toronto, Canada"
      />
    </PageWrapper>
  );
}
