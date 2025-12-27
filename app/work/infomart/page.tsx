import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import InfomartPage from '../../../src/page-components/workAt/InfomartPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infomart',
  description: 'Work experience at Infomart',
};

export default function Infomart() {
  return (
    <DefaultLayout>
      <InfomartPage />
    </DefaultLayout>
  );
}
