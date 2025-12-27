import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '../src/styles/fonts.css';
import '../src/styles/tailwind.css';
import '../src/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Simon Yates',
    default: 'Simon Yates',
  },
  description:
    'Product & Engineering Leader building accessible, ethical, human-centred systems.',
  metadataBase: new URL('https://simonyates.ca'),
  openGraph: {
    title: 'Simon Yates',
    description:
      'Product & Engineering Leader building accessible, ethical, human-centred systems.',
    url: 'https://simonyates.ca',
    siteName: 'Simon Yates',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simon Yates',
    description:
      'Product & Engineering Leader building accessible, ethical, human-centred systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
