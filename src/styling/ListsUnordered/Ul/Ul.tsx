import { ReactNode } from "react";

interface Props {
  /**
   * The list items to be displayed.
   */
  children: ReactNode;
  /**
   * If `true`, applies top padding to the list.
   */
  next?: boolean;
}

export default function Ul(props: Props) {
  const { children, next } = props;

  return <ul className={next ? "pt-6" : ""}>{children}</ul>;
}
