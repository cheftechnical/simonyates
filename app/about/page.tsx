import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import AboutPage from '../../src/page-components/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'About Simon Yates' },
  description:
    'Background, experience, and approach to building accessible, ethical, human-centred systems across product and engineering.',
};

export default function About() {
  return (
    <DefaultLayout>
      <AboutPage />
    </DefaultLayout>
  );
}
