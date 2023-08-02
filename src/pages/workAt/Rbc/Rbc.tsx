import {useSections} from '../../../components/Sections/useSections';
import WorkAtLogo from '../components/WorkAtLogo';
import WorkAtTemplate from '../components/WorkAtTemplate';
import Content from './Content';
import PageWrapper from "../../../components/PageWrapper";

export default function Rbc() {
  const [sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Work at RBC">
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
    </PageWrapper>
  );
};
