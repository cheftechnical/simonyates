import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import AppearancesPage from '../../src/page-components/AppearancesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appearances',
  description:
    'Invited talks and presentations for organisations including BrainStation, RBC, and IEEE, covering product, engineering, accessibility, and health-focused systems.',
};

export default function Appearances() {
  return (
    <DefaultLayout>
      <AppearancesPage />
    </DefaultLayout>
  );
}
