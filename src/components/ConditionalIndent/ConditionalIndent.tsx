import { ReactNode } from "react";

interface Props {
  /**
   * The content to be conditionally indented.
   */
  children?: ReactNode;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

export default function ConditionalIndent(props: Props) {
  const { children, className } = props;

  return (
    <div className={`pl-0 sm:pl-10 ${className || ""}`}>
      {children}
    </div>
  );
}
