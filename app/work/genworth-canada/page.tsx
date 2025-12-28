import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import GenworthCanadaPage from '../../../src/page-components/workAt/GenworthCanadaPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Genworth Canada');

export default function GenworthCanada() {
  return (
    <DefaultLayout>
      <GenworthCanadaPage />
    </DefaultLayout>
  );
}
