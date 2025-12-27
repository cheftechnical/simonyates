import { ReactNode } from "react";

interface Props {
  /**
   * The content of the image wrapper.
   */
  children: ReactNode;
}

export default function SouthernPacificDaylightImgWrapper(props: Props) {
  const { children } = props;

  return <div className="pl-[30px]">{children}</div>;
}

