import { ReactNode } from "react";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function LifeAsAMakerGridContainer(props: Props) {
  const { children } = props;

  return (
    <MyGridContainer className="pb-[139px]">
      {children}
    </MyGridContainer>
  );
}

