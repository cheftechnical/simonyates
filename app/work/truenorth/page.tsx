import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import TrueNorthPage from '../../../src/page-components/workAt/TrueNorthPage/TrueNorthPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('TrueNorth');

export default function TrueNorth() {
  return (
    <DefaultLayout>
      <TrueNorthPage />
    </DefaultLayout>
  );
}
