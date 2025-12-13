import { ReactNode } from "react";

interface Props {
  /**
   * The abstract text content.
   */
  children: ReactNode;
}

export default function FeaturedAbstract(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal tracking-[0.5px] text-gray-700">
      {children}
    </p>
  );
}

