import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import MayoClinicPage from '../../../src/page-components/workAt/MayoClinicPage/MayoClinicPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Mayo Clinic');

export default function MayoClinic() {
  return (
    <DefaultLayout>
      <MayoClinicPage />
    </DefaultLayout>
  );
}
