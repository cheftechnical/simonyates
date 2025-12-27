import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import JibDesignAndAdvertisingPage from '../../../src/page-components/workAt/JibDesignAndAdvertisingPage/JibDesignAndAdvertisingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jib Design and Advertising',
  description: 'Work experience at Jib Design and Advertising',
};

export default function JibDesignAndAdvertising() {
  return (
    <DefaultLayout>
      <JibDesignAndAdvertisingPage />
    </DefaultLayout>
  );
}
