import { getWorkExperienceBySectionId } from "../../../data/workExperience";
import WorkAtLogo from "../components/WorkAtLogo";
import WorkAtTemplate from "../components/WorkAtTemplate";
import Content from "./Content";
import { sectionCollection } from "./sections";

export function InfomartPage() {
  const workData = getWorkExperienceBySectionId("infomart");
  if (!workData) throw new Error("Work experience data not found for Infomart");

  return (
    <WorkAtTemplate
      content={<Content />}
      employer={workData.employer}
      logo={<WorkAtLogo brand={workData.brand} variant="default" />}
      role={typeof workData.role === "string" ? workData.role : <>{workData.role}</>}
      sections={sectionCollection}
      when={workData.when}
      where={workData.where}
    />
  );
}

export default InfomartPage;