import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import FigpiePage from '../../src/page-components/FigpiePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figpie',
  description: 'Figpie - Figma plugin for creating pie charts',
};

export default function Figpie() {
  return (
    <DefaultLayout>
      <FigpiePage />
    </DefaultLayout>
  );
}
