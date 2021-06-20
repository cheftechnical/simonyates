import DefaultLayout from '../../../layouts/Default';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';

export default function JibDesignAndAdvertising() {
  const [sections, handleSectionChange] = useSections();

  return (
    <DefaultLayout title="Work at Jib Design &amp; Advertising" top="work">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Jib Design & Advertising"
        logo={<WorkAtLogo brand="jib-design-and-advertising" variant="default"/>}
        role="Technical Director"
        sections={sections}
        when="2007–2008"
        where="Toronto, ON, Canada"
      />
    </DefaultLayout>
  );
};
