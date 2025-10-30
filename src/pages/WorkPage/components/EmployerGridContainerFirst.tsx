import { ReactNode } from "react";
import MyGridContainer from "../../../styling/MyGridContainer/MyGridContainer";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function EmployerGridContainerFirst(props: Props) {
  const { children } = props;

  if (!children) {
    return null;
  }

  return <MyGridContainer className="!mt-[84px]">{children}</MyGridContainer>;
}

