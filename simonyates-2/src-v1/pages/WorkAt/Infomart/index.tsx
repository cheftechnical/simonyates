import DefaultLayout from '../../../layouts/Default';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';

export default function Infomart() {
  const [sections, handleSectionChange] = useSections();

  return (
    <DefaultLayout title="Work at Infomart" top="work">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Infomart"
        logo={<WorkAtLogo brand="infomart" variant="default"/>}
        role="Architect & Lead Developer"
        sections={sections}
        when="2012–2014"
        where="Toronto, Canada"
      />
    </DefaultLayout>
  );
};
