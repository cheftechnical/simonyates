import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayout';
import PieChartBezierCurvesPage from '../../../src/page-components/StudiesPage/PieChartBezierCurvesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Mathematical Construction of Pie Charts Using Cubic Bézier Curves',
  description:
    'A mathematical exploration of constructing pie charts using cubic Bézier curves, presented through diagrams and formulas.',
};

export default function PieChartBezierCurvesStudy() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A Mathematical Construction of Pie Charts Using Cubic Bézier Curves',
    author: {
      '@type': 'Person',
      name: 'Simon Yates',
    },
    datePublished: '2020-12-25',
    dateModified: '2020-12-25',
    url: 'https://www.simonyates.ca/studies/pie-chart-bezier-curves',
  };

  return (
    <DefaultLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <PieChartBezierCurvesPage />
    </DefaultLayout>
  );
}


