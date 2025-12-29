import Container from "../../../../components/Container/Container";
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
    <Container>
      {children}
    </Container>
  );
}

