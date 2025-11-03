import { ReactNode } from "react";

interface Props {
  /**
   * The description content.
   */
  children?: ReactNode;
}

export default function SectionDescription(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal tracking-[0.5px] mb-[40px] text-gray-700">
      {children}
    </p>
  );
}
