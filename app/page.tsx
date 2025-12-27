import DefaultLayout from '../src/layouts/DefaultLayout/DefaultLayoutNext';
import HomePage from '../src/page-components/HomePage/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Simon Yates',
  description: 'Product Designer, Developer, and Strategist',
};

export default function Home() {
  return (
    <DefaultLayout fullHeight>
      <HomePage />
    </DefaultLayout>
  );
}
