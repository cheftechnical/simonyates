import DefaultLayout from '../../src/layouts/DefaultLayout/DefaultLayoutNext';
import ContactPage from '../../src/page-components/ContactPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Simon Yates',
};

export default function Contact() {
  return (
    <DefaultLayout>
      <ContactPage />
    </DefaultLayout>
  );
}
