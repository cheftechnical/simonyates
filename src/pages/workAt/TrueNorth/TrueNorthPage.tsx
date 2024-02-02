import PageWrapper from "../../../components/PageWrapper";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import WorkAtLogo from "../components/WorkAtLogo";
import {useSections} from "../../../components/Sections/useSections";

export function TrueNorthPage() {
  const [sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Work at TrueNorth">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="TrueNorth Technologies"
        logo={<WorkAtLogo brand="truenorth" variant="default"/>}
        role={
          <>Team Lead & Staff Frontend Software Engineer</>
        }
        sections={sections}
        when="March 2021 to March 2023"
        where="San Francisco, CA, USA"
      />
    </PageWrapper>
  )
};

export default TrueNorthPage;
