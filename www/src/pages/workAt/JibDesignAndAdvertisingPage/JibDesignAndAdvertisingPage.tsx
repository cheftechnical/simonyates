import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';
import PageWrapper from "../../../components/PageWrapper";

export default function JibDesignAndAdvertisingPage() {
  const [sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Work at Jib Design &amp; Advertising">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Jib Design & Advertising"
        logo={<WorkAtLogo brand="jib-design-and-advertising" variant="default"/>}
        role="Technical Director"
        sections={sections}
        when="2007–2008"
        where="Toronto, ON, Canada"
      />
    </PageWrapper>
  );
};
