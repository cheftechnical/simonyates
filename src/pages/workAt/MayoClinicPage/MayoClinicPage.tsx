import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';
import PageWrapper from '../../../components/PageWrapper';

export default function MayoClinicPage() {
  const [sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Work at Mayo Clinic">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Mayo Clinic"
        logo={<WorkAtLogo brand="mayo-clinic" variant="default"/>}
        role="Software Engineer"
        sections={sections}
        when="October 2014 to October 15"
        where="Rochester, MN, USA"
      />
    </PageWrapper>
  );
};
