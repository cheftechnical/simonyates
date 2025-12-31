import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import PhilipsLightingPage from '../../../src/page-components/workAt/PhilipsLightingPage/PhilipsLightingPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Philips Lighting', 'philips-lighting');

export default function PhilipsLighting() {
  return (
    <DefaultLayout>
      <PhilipsLightingPage />
    </DefaultLayout>
  );
}
