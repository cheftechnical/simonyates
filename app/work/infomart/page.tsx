import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import InfomartPage from '../../../src/page-components/workAt/InfomartPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Infomart');

export default function Infomart() {
  return (
    <DefaultLayout>
      <InfomartPage />
    </DefaultLayout>
  );
}
