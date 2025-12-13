import PageWrapper from "../../../components/PageWrapper";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import WorkAtLogo from "../components/WorkAtLogo";
import { sections } from "./sections.ts";
import { getWorkExperienceBySectionId } from "../../../data/workExperience";

export function TrueNorthPage() {
  const workData = getWorkExperienceBySectionId("truenorth");
  if (!workData) throw new Error("Work experience data not found for TrueNorth");

  return (
    <PageWrapper title="Work at TrueNorth">
      <WorkAtTemplate
        content={<Content />}
        employer={workData.employer}
        logo={<WorkAtLogo brand={workData.brand} variant="default" />}
        role={typeof workData.role === "string" ? workData.role : <>{workData.role}</>}
        sections={sections}
        when={workData.when}
        where={workData.where}
      />
    </PageWrapper>
  );
}

export default TrueNorthPage;
