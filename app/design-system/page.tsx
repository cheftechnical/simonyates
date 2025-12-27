import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import DesignSystemPage from '../../src/page-components/DesignSystemPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Personal design system and design principles by Simon Yates',
};

export default function DesignSystem() {
  return (
    <DefaultLayout>
      <DesignSystemPage />
    </DefaultLayout>
  );
}
