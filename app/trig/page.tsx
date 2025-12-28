import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import FigpieTrigonometryPage from '../../src/page-components/FigpieTrigonometryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Build a Pie Chart with Cubic Bézier Curves',
  description:
    'A mathematical exploration of constructing pie charts using cubic Bézier curves, presented through diagrams and formulas.',
};

export default function FigpieTrigonometry() {
  return (
    <DefaultLayout>
      <FigpieTrigonometryPage />
    </DefaultLayout>
  );
}
