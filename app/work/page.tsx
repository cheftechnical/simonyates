import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import WorkPage from '../../src/page-components/WorkPage/WorkPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Professional work experience and portfolio',
};

export default function Work() {
  return (
    <DefaultLayout>
      <WorkPage />
    </DefaultLayout>
  );
}
