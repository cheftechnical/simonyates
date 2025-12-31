import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import MayoClinicPage from '../../../src/page-components/workAt/MayoClinicPage/MayoClinicPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Mayo Clinic', 'mayo-clinic');

export default function MayoClinic() {
  return (
    <DefaultLayout>
      <MayoClinicPage />
    </DefaultLayout>
  );
}
