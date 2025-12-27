import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import FeaturedPage from '../../src/page-components/FeaturedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured',
  description: 'Featured work and projects by Simon Yates',
};

export default function Featured() {
  return (
    <DefaultLayout>
      <FeaturedPage />
    </DefaultLayout>
  );
}
