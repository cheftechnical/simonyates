import { ReactNode } from "react";

interface Props {
  /**
   * The content of the image wrapper.
   */
  children: ReactNode;
}

export default function ModelRailroaderMagazineImgWrapper(props: Props) {
  const { children } = props;

  return <div className="pl-[135px] pr-[88px]">{children}</div>;
}

