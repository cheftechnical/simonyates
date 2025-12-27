import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import LegalPage from '../../src/page-components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy Policy and Terms of Service',
};

export default function Legal() {
  return (
    <DefaultLayout>
      <LegalPage />
    </DefaultLayout>
  );
}
