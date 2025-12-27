import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import AppearancesPage from '../../src/page-components/AppearancesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appearances',
  description: 'Public appearances, talks, and presentations by Simon Yates',
};

export default function Appearances() {
  return (
    <DefaultLayout>
      <AppearancesPage />
    </DefaultLayout>
  );
}
