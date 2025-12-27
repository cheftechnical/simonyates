import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import AboutPage from '../../src/page-components/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Simon Yates - Product Designer, Developer, and Strategist',
};

export default function About() {
  return (
    <DefaultLayout>
      <AboutPage />
    </DefaultLayout>
  );
}
