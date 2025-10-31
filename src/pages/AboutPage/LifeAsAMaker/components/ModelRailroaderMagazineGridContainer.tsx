import { ReactNode } from "react";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function ModelRailroaderMagazineGridContainer(props: Props) {
  const { children } = props;

  return (
    <MyGridContainer className="pb-0 sm:pb-[70px]">
      {children}
    </MyGridContainer>
  );
}

