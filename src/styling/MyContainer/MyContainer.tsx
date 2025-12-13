import { ReactNode } from "react";

interface Props {
  /**
   * The content to be displayed inside the container
   */
  children: NonNullable<ReactNode>;
  
  /**
   * Additional CSS classes to apply to the container
   */
  className?: string;
  
  /**
   * If true, the container will take the full height of its parent
   */
  fullHeight?: boolean;
}

export default function MyContainer({ children, className = "", fullHeight = false }: Props) {
  const baseClasses = `
    mx-auto
    px-[22px]
    w-full
    max-w-full
    sm:max-w-[600px]
    md:max-w-[960px]
    lg:max-w-[1076px]
    ${fullHeight ? "h-full" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
}
