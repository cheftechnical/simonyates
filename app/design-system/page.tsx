import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import DesignSystemPage from '../../src/page-components/DesignSystemPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design System',
  description:
    'Principles, typography, layout, and structural decisions that govern the design of this site.',
};

export default function DesignSystem() {
  return (
    <DefaultLayout>
      <DesignSystemPage />
    </DefaultLayout>
  );
}
