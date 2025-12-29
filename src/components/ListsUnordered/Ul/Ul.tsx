import { ReactNode } from "react";

interface Props {
  /**
   * The list items to be displayed.
   */
  children: ReactNode;
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * If `true`, applies top padding to the list.
   */
  next?: boolean;
}

export default function Ul(props: Props) {
  const { children, className, next } = props;

  const classes = [next ? "pt-6" : "", className || ""]
    .filter(Boolean)
    .join(" ");

  return <ul className={classes || undefined}>{children}</ul>;
}
