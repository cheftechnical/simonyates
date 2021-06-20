import DefaultLayout from '../../../layouts/Default';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';

export default function Rbc() {
  const [sections, handleSectionChange] = useSections();

  return (
    <DefaultLayout title="Work at RBC" top="work">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="RBC"
        logo={<WorkAtLogo brand="rbc" variant="default"/>}
        role={
          <>Product Manager / Lead Software Engineer, Site&nbsp;Reliability&nbsp;Engineering</>
        }
        sections={sections}
        when="July 2018 to March 2021"
        where="Toronto, Canada"
      />
    </DefaultLayout>
  );
};
