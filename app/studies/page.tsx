import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import StudiesPage from '../../src/page-components/StudiesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studies',
  alternates: { canonical: '/studies' },
  description:
    'Explorations and case studies examining ideas, tools, and systems across product, engineering, and design.',
};

export default function Studies() {
  return (
    <DefaultLayout>
      <StudiesPage />
    </DefaultLayout>
  );
}
