import { ReactNode } from "react";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function GwBasicGridContainer(props: Props) {
  const { children } = props;

  return (
    <MyGridContainer className="pb-[56px] sm:pb-[152px]">
      {children}
    </MyGridContainer>
  );
}

