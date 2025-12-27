import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections";
import { getWorkExperienceBySectionId } from "../../../data/workExperience";

export function GenworthCanada() {
  const workData = getWorkExperienceBySectionId("genworth-canada");
  if (!workData) throw new Error("Work experience data not found for Genworth Canada");

  return (
    <PageWrapper title="Work at Genworth Canada">
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

export default GenworthCanada;