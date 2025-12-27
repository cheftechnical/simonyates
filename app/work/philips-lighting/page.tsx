import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import PhilipsLightingPage from '../../../src/page-components/workAt/PhilipsLightingPage/PhilipsLightingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philips Lighting',
  description: 'Work experience at Philips Lighting',
};

export default function PhilipsLighting() {
  return (
    <DefaultLayout>
      <PhilipsLightingPage />
    </DefaultLayout>
  );
}
