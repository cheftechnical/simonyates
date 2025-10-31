import { ReactNode } from "react";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function TlcGridContainer(props: Props) {
  const { children } = props;

  return (
    <MyGridContainer className="pb-[64px]">
      {children}
    </MyGridContainer>
  );
}

