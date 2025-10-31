import { ReactNode } from "react";

interface Props {
  /**
   * Container content
   */
  children: NonNullable<ReactNode>;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function MyGridContainer({ children, className = "" }: Props) {
  const baseClasses = `
    flex
    flex-wrap
    -mx-3
    ${className}
  `.trim().replace(/\s+/g, " ");

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}
