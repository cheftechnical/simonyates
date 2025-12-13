import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.tsx";
import { getWorkExperienceBySectionId } from "../../../data/workExperience";

export default function RbcPage() {
  const workData = getWorkExperienceBySectionId("rbc");
  if (!workData) throw new Error("Work experience data not found for RBC");

  return (
    <PageWrapper title="Work at RBC">
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
