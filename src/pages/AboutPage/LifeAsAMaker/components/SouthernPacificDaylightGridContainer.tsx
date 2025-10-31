import { ReactNode } from "react";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function SouthernPacificDaylightGridContainer(props: Props) {
  const { children } = props;

  return (
    <MyGridContainer className="pb-[109px] sm:pb-[258px]">
      {children}
    </MyGridContainer>
  );
}

