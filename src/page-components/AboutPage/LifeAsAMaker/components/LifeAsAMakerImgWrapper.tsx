import { ReactNode } from "react";

interface Props {
  /**
   * The content of the image wrapper.
   */
  children: ReactNode;
}

export default function LifeAsAMakerImgWrapper(props: Props) {
  const { children } = props;

  return <div className="pr-[88px]">{children}</div>;
}

