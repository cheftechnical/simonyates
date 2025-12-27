import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import RbcPage from '../../../src/page-components/workAt/RbcPage/RbcPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RBC',
  description: 'Work experience at RBC',
};

export default function Rbc() {
  return (
    <DefaultLayout>
      <RbcPage />
    </DefaultLayout>
  );
}
