import { ReactNode } from "react";

interface Props {
  /**
   * The content of the image wrapper.
   */
  children: ReactNode;
}

export default function ComputerCityImgWrapper(props: Props) {
  const { children } = props;

  return <div className="pr-[131px]">{children}</div>;
}
