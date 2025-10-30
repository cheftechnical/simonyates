import { ReactNode } from "react";

interface Props {
  /**
   * The publication name/title.
   */
  children: ReactNode;
}

export default function PublicationName(props: Props) {
  const { children } = props;

  return (
    <h3 className="font-semibold text-base leading-6 tracking-[0.5px] mb-[16px]">
      {children}
    </h3>
  );
}

