import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import TrueNorthTechnologiesPage from '../../../src/page-components/workAt/TrueNorthTechnologiesPage/TrueNorthTechnologiesPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('TrueNorth Technologies', 'truenorth-technologies');

export default function TrueNorthTechnologies() {
  return (
    <DefaultLayout>
      <TrueNorthTechnologiesPage />
    </DefaultLayout>
  );
}
