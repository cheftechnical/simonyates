import MyContainer from "../../../../styling/MyContainer/MyContainer";
import { ReactNode } from "react";

interface Props {
  /**
   * The content of the container.
   */
  children: NonNullable<ReactNode>;
}

export default function LifeAsAMakerContainer(props: Props) {
  const { children } = props;

  return (
    <MyContainer>
      {children}
    </MyContainer>
  );
}

