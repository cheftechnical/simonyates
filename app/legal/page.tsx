import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import LegalPage from '../../src/page-components/LegalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy Policy and Terms of Service governing the use of this site.',
};

export default function Legal() {
  return (
    <DefaultLayout>
      <LegalPage />
    </DefaultLayout>
  );
}
