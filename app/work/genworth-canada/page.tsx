import DefaultLayout from '../../../src/layouts/DefaultLayout/DefaultLayoutNext';
import GenworthCanadaPage from '../../../src/page-components/workAt/GenworthCanadaPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Genworth Canada',
  description: 'Work experience at Genworth Canada',
};

export default function GenworthCanada() {
  return (
    <DefaultLayout>
      <GenworthCanadaPage />
    </DefaultLayout>
  );
}
