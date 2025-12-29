import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import WorkPage from '../../src/page-components/WorkPage/WorkPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Professional experience across companies, with detailed records of roles, projects, and contributions.',
};

export default function Work() {
  return (
    <DefaultLayout>
      <WorkPage />
    </DefaultLayout>
  );
}
