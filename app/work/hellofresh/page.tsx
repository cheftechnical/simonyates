import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import HelloFreshPage from '../../../src/page-components/workAt/HelloFreshPage/HelloFreshPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('HelloFresh', 'hellofresh');

export default function HelloFresh() {
  return (
    <DefaultLayout>
      <HelloFreshPage />
    </DefaultLayout>
  );
}
