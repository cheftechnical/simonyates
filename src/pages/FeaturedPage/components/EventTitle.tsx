import { ReactNode } from "react";

interface Props {
  /**
   * The event title.
   */
  children: ReactNode;
}

export default function EventTitle(props: Props) {
  const { children } = props;

  return (
    <h3 className="font-semibold text-base leading-normal tracking-[0.5px]">
      {children}
    </h3>
  );
}

