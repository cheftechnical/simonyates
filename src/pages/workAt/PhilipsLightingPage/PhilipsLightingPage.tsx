import WorkAtLogo from "../components/WorkAtLogo.tsx";
import Content from "./Content.tsx";
import WorkAtTemplate from "../components/WorkAtTemplate.tsx";
import PageWrapper from "../../../components/PageWrapper/index.ts";
import { sections } from "./sections.ts";

export function PhilipsLightingPage() {
  return (
    <PageWrapper title="Work at Philips Lighting">
      <WorkAtTemplate
        content={<Content />}
        employer="Philips Lighting"
        logo={
          <WorkAtLogo brand="philips-lighting" variant="default" />
        }
        role="Technical Director"
        sections={sections}
        when="2007–2008"
        where="Toronto, ON, Canada"
      />
    </PageWrapper>
  );
}

export default PhilipsLightingPage;

