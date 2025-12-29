import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import FigpiePage from '../../src/page-components/FigpiePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figpie',
  description: 'A Figma plugin for creating clean, editable pie charts from data.',
};

export default function Figpie() {
  return (
    <DefaultLayout>
      <FigpiePage />
    </DefaultLayout>
  );
}
