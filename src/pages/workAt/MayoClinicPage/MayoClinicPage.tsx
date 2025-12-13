import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.ts";
import { getWorkExperienceBySectionId } from "../../../data/workExperience";

export default function MayoClinicPage() {
  const workData = getWorkExperienceBySectionId("mayo-clinic");
  if (!workData) throw new Error("Work experience data not found for Mayo Clinic");

  return (
    <PageWrapper title="Work at Mayo Clinic">
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
