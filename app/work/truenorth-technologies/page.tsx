import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import TrueNorthPage from '../../../src/page-components/workAt/TrueNorthPage/TrueNorthPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('TrueNorth Technologies');

export default function TrueNorthTechnologies() {
  return (
    <DefaultLayout>
      <TrueNorthPage />
    </DefaultLayout>
  );
}
