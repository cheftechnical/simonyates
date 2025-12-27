import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import StudiesPage from '../../src/page-components/StudiesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studies',
  description: 'Case studies and design explorations by Simon Yates',
};

export default function Studies() {
  return (
    <DefaultLayout>
      <StudiesPage />
    </DefaultLayout>
  );
}
