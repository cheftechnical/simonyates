import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayout';
import ContactPage from '../../src/page-components/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Contact Simon Yates' },
  alternates: { canonical: '/contact' },
  description:
    'How to get in touch with Simon Yates regarding talks, collaboration, or general enquiries.',
};

export default function Contact() {
  return (
    <DefaultLayout>
      <ContactPage />
    </DefaultLayout>
  );
}
