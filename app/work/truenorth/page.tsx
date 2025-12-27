import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import TrueNorthPage from '../../../src/page-components/workAt/TrueNorthPage/TrueNorthPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrueNorth',
  description: 'Work experience at TrueNorth',
};

export default function TrueNorth() {
  return (
    <DefaultLayout>
      <TrueNorthPage />
    </DefaultLayout>
  );
}
