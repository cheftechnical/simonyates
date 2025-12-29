import '../src/styles/fonts.css';
import '../src/styles/global.css';
import '../src/styles/tailwind.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s · Simon Yates',
    default: 'Simon Yates',
  },
  description:
    'Product & engineering leader building accessible, ethical, human-centred systems.',
  metadataBase: new URL('https://simonyates.ca'),
  openGraph: {
    title: 'Simon Yates',
    description:
      'Product & engineering leader building accessible, ethical, human-centred systems.',
    url: 'https://simonyates.ca',
    siteName: 'Simon Yates',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/home/og-image.png',
        alt: 'A magpie is perched on a branch (ink sketch).',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simon Yates',
    description:
      'Product & engineering leader building accessible, ethical, human-centred systems.',
    images: ['/images/home/og-image.png'],
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
    <html lang="en-CA">
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
