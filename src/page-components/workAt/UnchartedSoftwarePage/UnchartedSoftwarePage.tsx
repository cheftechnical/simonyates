import { getWorkExperienceBySectionId } from "../../../data/workExperience";
import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import { sections } from "./sections";

export default function UnchartedSoftwarePage() {
  const workData = getWorkExperienceBySectionId("uncharted-software");
  if (!workData) throw new Error("Work experience data not found for Uncharted Software");

  return (
    <WorkAtTemplate
      content={<Content />}
      employer={workData.employer}
      logo={<WorkAtLogo brand={workData.brand} variant="default" />}
      role={typeof workData.role === "string" ? workData.role : <>{workData.role}</>}
      sections={sections}
      when={workData.when}
      where={workData.where}
    />
  );
}
