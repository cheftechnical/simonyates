import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.ts";

export default function MayoClinicPage() {
  return (
    <PageWrapper title="Work at Mayo Clinic">
      <WorkAtTemplate
        content={<Content />}
        employer="Mayo Clinic"
        logo={<WorkAtLogo brand="mayo-clinic" variant="default" />}
        role="Software Engineer"
        sections={sections}
        when="October 2014 to October 15"
        where="Rochester, MN, USA"
      />
    </PageWrapper>
  );
}
