import {Helmet} from "react-helmet-async";
import {ReactNode} from "react";

export interface Props {
  /**
   * Child components
   */
  children: ReactNode;
  /**
   * The title of the page as it appears in the <head><title>...</title></head>
   */
  title: string;
}

export default function PageWrapper(props: Props) {
  const {children, title} = props;

  return (
    <>
      <Helmet defaultTitle="Simon Yates" titleTemplate="Simon Yates &bull; %s">
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}
