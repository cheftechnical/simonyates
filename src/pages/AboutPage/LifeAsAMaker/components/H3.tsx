import { ReactNode } from "react";

interface Props {
  /**
   * The heading content.
   */
  children: ReactNode;
}

export default function H3(props: Props) {
  const { children } = props;

  return (
    <h3 className="font-medium text-2xl leading-8 tracking-[0.25px] pb-[24px]">
      {children}
    </h3>
  );
}

