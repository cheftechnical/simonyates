import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper";
import { sectionCollection } from "./sections";
import { getWorkExperienceBySectionId } from "../../../data/workExperience";

export function InfomartPage() {
  const workData = getWorkExperienceBySectionId("infomart");
  if (!workData) throw new Error("Work experience data not found for Infomart");

  return (
    <PageWrapper title="Work at Infomart">
      <WorkAtTemplate
        content={<Content />}
        employer={workData.employer}
        logo={<WorkAtLogo brand={workData.brand} variant="default" />}
        role={typeof workData.role === "string" ? workData.role : <>{workData.role}</>}
        sections={sectionCollection}
        when={workData.when}
        where={workData.where}
      />
    </PageWrapper>
  );
}

export default InfomartPage;