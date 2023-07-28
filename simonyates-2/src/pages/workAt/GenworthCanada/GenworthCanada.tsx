import DefaultLayout from '../../../layouts/Default/Default';
import WorkAtLogo from '../components/WorkAtLogo';
import WorkAtTemplate from '../components/WorkAtTemplate';
import Content from './Content';
import {useSections} from '../../../components/Sections/useSections';

export default function GenworthCanada() {
  const [sections, handleSectionChange] = useSections();

  return (
    <DefaultLayout title="Work at Genworth Canada" top="work">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Genworth Canada"
        logo={<WorkAtLogo brand="genworth-canada" variant="default"/>}
        role="Developer"
        sections={sections}
        when="July 2014 to January 2015"
        where="Oakville, ON, Canada"
      />
    </DefaultLayout>
  );
};
