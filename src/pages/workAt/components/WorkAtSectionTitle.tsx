import { ReactNode } from "react";

interface Props {
  /**
   * The content of the section title.
   */
  children?: ReactNode;
}

export default function WorkAtSectionTitle(props: Props) {
  const { children } = props;

  return (
    <h2 className="font-normal text-2xl leading-8 mt-[68px] mb-8">
      {children}
    </h2>
  );
}
