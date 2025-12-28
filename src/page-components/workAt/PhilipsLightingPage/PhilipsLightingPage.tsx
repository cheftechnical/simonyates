import { getWorkExperienceBySectionId } from "../../../data/workExperience";
import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import { sections } from "./sections";

export function PhilipsLightingPage() {
  const workData = getWorkExperienceBySectionId("philips-lighting");
  if (!workData) throw new Error("Work experience data not found for Philips Lighting");

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

export default PhilipsLightingPage;

