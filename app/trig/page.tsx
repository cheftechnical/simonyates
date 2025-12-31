import type { Metadata } from 'next';
import Link from 'next/link';

const newPath = '/studies/pie-chart-bezier-curves';

export const metadata: Metadata = {
  title: 'Moved',
  alternates: { canonical: newPath },
  robots: { index: false, follow: true },
};

export default function TrigRedirect() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(newPath)});`,
        }}
      />
      <p>
        This page has moved to <Link href={newPath}>{newPath}</Link>.
      </p>
    </>
  );
}
