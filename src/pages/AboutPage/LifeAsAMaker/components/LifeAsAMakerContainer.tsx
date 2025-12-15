import { ReactNode } from "react";
import MyContainer from "../../../../styling/MyContainer/MyContainer";

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

