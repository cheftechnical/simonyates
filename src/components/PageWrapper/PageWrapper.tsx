import { ReactNode } from "react";

export interface Props {
  /**
   * Child components
   */
  children: ReactNode;

  /**
   * The title of the page (handled by Next.js metadata at page level)
   */
  title?: string;
}

export function PageWrapper(props: Props) {
  const { children } = props;

  // In Next.js, metadata is handled at the page level, so we just return children
  return <>{children}</>;
}

export default PageWrapper;
