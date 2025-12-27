import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper/index";
import { sections } from "./sections";
import { getWorkExperienceBySectionId } from "../../../data/workExperience";

export function PhilipsLightingPage() {
  const workData = getWorkExperienceBySectionId("philips-lighting");
  if (!workData) throw new Error("Work experience data not found for Philips Lighting");

  return (
    <PageWrapper title="Work at Philips Lighting">
      <WorkAtTemplate
        content={<Content />}
        employer={workData.employer}
        logo={
          <WorkAtLogo brand={workData.brand} variant="default" />
        }
        role={typeof workData.role === "string" ? workData.role : <>{workData.role}</>}
        sections={sections}
        when={workData.when}
        where={workData.where}
      />
    </PageWrapper>
  );
}

export default PhilipsLightingPage;

