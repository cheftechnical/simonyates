import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import MayoClinicPage from '../../../src/page-components/workAt/MayoClinicPage/MayoClinicPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mayo Clinic',
  description: 'Work experience at Mayo Clinic',
};

export default function MayoClinic() {
  return (
    <DefaultLayout>
      <MayoClinicPage />
    </DefaultLayout>
  );
}
