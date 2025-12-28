import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import PieChartBezierCurvesPage from '../../../src/page-components/StudiesPage/PieChartBezierCurvesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Mathematical Construction of Pie Charts Using Cubic Bézier Curves',
  description:
    'A mathematical exploration of constructing pie charts using cubic Bézier curves, presented through diagrams and formulas.',
};

export default function PieChartBezierCurvesStudy() {
  return (
    <DefaultLayout>
      <PieChartBezierCurvesPage />
    </DefaultLayout>
  );
}


