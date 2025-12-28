import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import RbcPage from '../../../src/page-components/workAt/RbcPage/RbcPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('RBC');

export default function Rbc() {
  return (
    <DefaultLayout>
      <RbcPage />
    </DefaultLayout>
  );
}
