import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import UnchartedSoftwarePage from '../../../src/page-components/workAt/UnchartedSoftwarePage/UnchartedSoftwarePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uncharted Software',
  description: 'Work experience at Uncharted Software',
};

export default function UnchartedSoftware() {
  return (
    <DefaultLayout>
      <UnchartedSoftwarePage />
    </DefaultLayout>
  );
}
