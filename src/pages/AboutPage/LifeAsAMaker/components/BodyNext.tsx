import { ReactNode } from "react";

interface Props {
  /**
   * The body text content.
   */
  children: ReactNode;
}

export default function BodyNext(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal text-justify pt-[24px]">
      {children}
    </p>
  );
}

