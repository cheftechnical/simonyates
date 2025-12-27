import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import HelloFreshPage from '../../../src/page-components/workAt/HelloFreshPage/HelloFreshPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HelloFresh',
  description: 'Work experience at HelloFresh',
};

export default function HelloFresh() {
  return (
    <DefaultLayout>
      <HelloFreshPage />
    </DefaultLayout>
  );
}
