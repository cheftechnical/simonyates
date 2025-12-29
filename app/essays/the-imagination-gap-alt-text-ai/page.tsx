import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import TheImaginationGapAltTextAiPage from '../../../src/page-components/EssayPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Imagination Gap: Alt Text & AI',
  description: 'An essay exploring the gap between human imagination and AI-generated alt text',
  openGraph: {
    title: 'The Imagination Gap: Alt Text & AI',
    description: 'An essay exploring the gap between human imagination and AI-generated alt text',
    images: [
      {
        url: '/images/essays/the-imagination-gap-alt-text-ai/og-image.png',
        alt: 'A sketch of a pen and a notebook.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Imagination Gap: Alt Text & AI',
    description: 'An essay exploring the gap between human imagination and AI-generated alt text',
    images: ['/images/essays/the-imagination-gap-alt-text-ai/og-image.png'],
  },
};

export default function EssayTheImaginationGapAltTextAi() {
  return (
    <DefaultLayout>
      <TheImaginationGapAltTextAiPage />
    </DefaultLayout>
  );
}
