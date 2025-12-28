import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import HelloFreshPage from '../../../src/page-components/workAt/HelloFreshPage/HelloFreshPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('HelloFresh');

export default function HelloFresh() {
  return (
    <DefaultLayout>
      <HelloFreshPage />
    </DefaultLayout>
  );
}
