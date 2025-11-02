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
        role="Retail Sales & Business Data Analyst"
        sections={sections}
        when="2002–2006"
        where="Markham, ON, Canada"
      />
    </PageWrapper>
  );
}

export default PhilipsLightingPage;

