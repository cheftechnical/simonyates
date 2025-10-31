import { ReactNode } from "react";

interface Props {
  children: NonNullable<ReactNode>;
  className?: string;
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
