import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import FeaturedPage from '../../src/page-components/FeaturedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured',
  description:
    'A curated selection of ideas, systems, and projects across product, engineering, and design.',
};

export default function Featured() {
  return (
    <DefaultLayout>
      <FeaturedPage />
    </DefaultLayout>
  );
}
