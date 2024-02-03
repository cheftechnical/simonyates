import { Helmet } from "react-helmet-async";
import { ReactNode } from "react";

type PageWrapperProps = {
  /**
   * Child components
   */
  children: ReactNode;
  /**
   * The title of the page as it appears in the <head><title>...</title></head>
   */
  title: string;
};

export function PageWrapper(props: PageWrapperProps) {
  const { children, title } = props;

  return (
    <>
      <Helmet defaultTitle="Simon Yates" titleTemplate="Simon Yates &bull; %s">
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

export default PageWrapper;
