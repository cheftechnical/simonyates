import DefaultLayout from '../src/layouts/DefaultLayout/DefaultLayout';
import HomePage from '../src/page-components/HomePage/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <DefaultLayout fullHeight>
      <HomePage />
    </DefaultLayout>
  );
}
