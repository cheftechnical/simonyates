import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import TheImaginationGapAltTextAiPage from '../../../src/page-components/EssayPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Imagination Gap: Alt Text & AI',
  description: 'An essay exploring the gap between human imagination and AI-generated alt text',
};

export default function EssayTheImaginationGapAltTextAi() {
  return (
    <DefaultLayout>
      <TheImaginationGapAltTextAiPage />
    </DefaultLayout>
  );
}
