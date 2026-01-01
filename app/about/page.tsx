import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import AboutPage from '../../src/page-components/AboutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'About Simon Yates' },
  alternates: { canonical: '/about' },
  description:
    'Background, experience, and approach to building accessible, ethical, human-centred systems across product and engineering.',
};

export default function About() {
  const jsonLdWebPage = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.simonyates.ca/about#webpage',
        url: 'https://www.simonyates.ca/about',
        name: 'About Simon Yates',
        about: {
          '@id': 'https://www.simonyates.ca/#simon-yates',
        },
        isPartOf: {
          '@id': 'https://www.simonyates.ca/#website',
        },
      },
    ],
  };

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <AboutPage />
    </DefaultLayout>
  );
}
