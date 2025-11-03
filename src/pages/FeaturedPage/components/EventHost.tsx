import { ReactNode } from "react";

interface Props {
  /**
   * The event host name.
   */
  children: ReactNode;
}

export default function EventHost(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal tracking-[0.5px] pt-[16px] text-gray-600">
      {children}
    </p>
  );
}

