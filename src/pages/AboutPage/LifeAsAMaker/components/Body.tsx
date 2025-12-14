import { ReactNode } from "react";

interface Props {
  /**
   * The body text content.
   */
  children: ReactNode;
}

export default function Body(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal text-justify">
      {children}
    </p>
  );
}

