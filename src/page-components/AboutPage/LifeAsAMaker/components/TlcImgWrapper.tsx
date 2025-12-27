import { ReactNode } from "react";

interface Props {
  /**
   * The content of the image wrapper.
   */
  children: ReactNode;
}

export default function TlcImgWrapper(props: Props) {
  const { children } = props;

  return <div className="pl-[88px]">{children}</div>;
}

