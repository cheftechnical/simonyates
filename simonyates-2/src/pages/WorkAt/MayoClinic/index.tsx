import DefaultLayout from '../../../layouts/Default/Default';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';
import {useSections} from '../../../components/Sections/useSections';

export default function MayoClinic() {
  const [sections, handleSectionChange] = useSections();

  return (
    <DefaultLayout title="Work at Mayo Clinic" top="work">
      <WorkAtTemplate
        content={<Content onChange={handleSectionChange}/>}
        employer="Mayo Clinic"
        logo={<WorkAtLogo brand="mayo-clinic" variant="default"/>}
        role="Software Engineer"
        sections={sections}
        when="October 2014 to October 15"
        where="Rochester, MN, USA"
      />
    </DefaultLayout>
  );
};
