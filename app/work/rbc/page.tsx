import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import RbcPage from '../../../src/page-components/workAt/RbcPage/RbcPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('RBC', 'rbc');

export default function Rbc() {
  return (
    <DefaultLayout>
      <RbcPage />
    </DefaultLayout>
  );
}
