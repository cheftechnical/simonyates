import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import FigpiePage from '../../src/page-components/FigpiePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figpie',
  description: 'A Figma plugin for creating clean, editable pie charts from data.',
};

export default function Figpie() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Figpie',
    author: {
      '@type': 'Person',
      name: 'Simon Yates',
    },
    datePublished: '2021-04-13',
    dateModified: '2021-04-13',
    url: 'https://www.simonyates.ca/figpie',
  };

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <FigpiePage />
    </DefaultLayout>
  );
}
