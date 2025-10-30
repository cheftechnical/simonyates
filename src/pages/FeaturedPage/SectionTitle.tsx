import { ReactNode } from "react";

interface Props {
  /**
   * The section title text.
   */
  children?: ReactNode;
}

export default function SectionTitle(props: Props) {
  const { children } = props;

  return (
    <h2 className="font-normal text-[34px] leading-[56px] tracking-[0.25px] mb-[16px]">
      {children}
    </h2>
  );
}
