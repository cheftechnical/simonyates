import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import FigpieTrigonometryPage from '../../src/page-components/FigpieTrigonometryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figpie Trigonometry',
  description: 'Trigonometry behind Figpie pie charts',
};

export default function FigpieTrigonometry() {
  return (
    <DefaultLayout>
      <FigpieTrigonometryPage />
    </DefaultLayout>
  );
}
