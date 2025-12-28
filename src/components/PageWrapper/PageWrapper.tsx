import { ReactNode } from "react";

export interface Props {
  /**
   * Child components
   */
  children: ReactNode;

  /**
   * The title of the page (handled by Next.js metadata at page level)
   *
   * @deprecated Page titles/metadata are handled by Next.js (`export const metadata`) at the route level. This prop is a legacy holdover from the pre-Next setup.
   */
  title?: string;
}

/**
 * @deprecated This component is a legacy no-op wrapper kept temporarily to ease the migration away from the old `PageWrapper` pattern.
 * Prefer composing layouts directly and setting metadata via Next.js `metadata` exports in your route files (for example, `app/about/page.tsx`).
 */
export function PageWrapper(props: Props) {
  const { children } = props;

  // In Next.js, metadata is handled at the page level, so we just return children
  return <>{children}</>;
}

export default PageWrapper;
