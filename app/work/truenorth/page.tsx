import type { Metadata } from 'next';
import Link from 'next/link';

const newPath = '/work/truenorth-technologies';

export const metadata: Metadata = {
  title: 'Moved',
  robots: { index: false, follow: true },
};

export default function TrueNorthRedirect() {
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


