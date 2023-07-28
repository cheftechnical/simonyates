import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';

export default function UnchartedSoftware() {
  const [sections, handleSectionChange] = useSections();

  return (
    // <DefaultLayout title="Work at Uncharted Software" top="work">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Uncharted Software"
        logo={<WorkAtLogo brand="uncharted-software" variant="default"/>}
        role="Senior Software Architect"
        sections={sections}
        when="May 2016 to 2018"
        where="Toronto, Canada"
      />
    // </DefaultLayout>
  );
};
