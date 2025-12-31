import InternationalPage from '../../src/page-components/InternationalPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International',
  alternates: { canonical: '/international' },
  description: 'International work and projects',
};

export default function International() {
  // NOTE: This page should NOT use the default layout because we want to
  // maximize our use of the viewport real estate.
  return <InternationalPage />;
}
