import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import JibDesignAndAdvertisingPage from '../../../src/page-components/workAt/JibDesignAndAdvertisingPage/JibDesignAndAdvertisingPage';
import { workCompanyMetadata } from '../companyMetadata';

export const metadata = workCompanyMetadata('Jib Design and Advertising');

export default function JibDesignAndAdvertising() {
  return (
    <DefaultLayout>
      <JibDesignAndAdvertisingPage />
    </DefaultLayout>
  );
}
