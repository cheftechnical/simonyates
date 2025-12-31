import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import UnchartedSoftwarePage from '../../../src/page-components/workAt/UnchartedSoftwarePage/UnchartedSoftwarePage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Uncharted Software', 'uncharted-software');

export default function UnchartedSoftware() {
  return (
    <DefaultLayout>
      <UnchartedSoftwarePage />
    </DefaultLayout>
  );
}
