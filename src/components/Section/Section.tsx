import { ReactNode } from "react";

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;

  /**
   * An id that uniquely identifies the component on the page
   */
  id: string;
}

export function Section(props: Props) {
  const { children, id } = props;

  return (
    <div id={id}>
      {children}
    </div>
  );
}

export default Section;