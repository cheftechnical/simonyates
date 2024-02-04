import WorkAtLogo from "../components/WorkAtLogo";
import Content from "./Content";
import WorkAtTemplate from "../components/WorkAtTemplate";
import PageWrapper from "../../../components/PageWrapper";
import { sections } from "./sections.ts";

export function JibDesignAndAdvertisingPage() {
  return (
    <PageWrapper title="Work at Jib Design &amp; Advertising">
      <WorkAtTemplate
        content={<Content />}
        employer="Jib Design & Advertising"
        logo={
          <WorkAtLogo brand="jib-design-and-advertising" variant="default" />
        }
        role="Technical Director"
        sections={sections}
        when="2007–2008"
        where="Toronto, ON, Canada"
      />
    </PageWrapper>
  );
}

export default JibDesignAndAdvertisingPage;
