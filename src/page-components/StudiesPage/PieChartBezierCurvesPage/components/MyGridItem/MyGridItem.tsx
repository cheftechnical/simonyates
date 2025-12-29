import { ReactNode } from "react";

interface Props {
  /**
   * Item content
   */
  children?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Number of columns (out of 12) at extra small breakpoint (xs: 0px+)
   */
  xs?: number;

  /**
   * Number of columns (out of 12) at small breakpoint (sm: 600px+)
   */
  sm?: number;

  /**
   * Number of columns (out of 12) at medium breakpoint (md: 960px+)
   */
  md?: number;

  /**
   * Number of columns (out of 12) at large breakpoint (lg: 1076px+)
   */
  lg?: number;

  /**
   * Number of columns (out of 12) at extra large breakpoint (xl: 1920px+)
   */
  xl?: number;
}

/**
 * Converts a column number (out of 12) to Tailwind flex-basis and max-width classes
 * Uses flex-basis for proper sizing in flex containers, max-width to constrain growth
 */
function getSizeClasses(columns: number): { basis: string; maxWidth: string } {
  const percentage = (columns / 12) * 100;
  return {
    basis: `basis-[${percentage}%]`,
    maxWidth: `max-w-[${percentage}%]`,
  };
}

export function MyGridItem({
  children,
  className = "",
  xs,
  sm,
  md,
  lg,
  xl,
}: Props) {
  const flexBasisClasses: string[] = [];
  const maxWidthClasses: string[] = [];

  // Build responsive flex-basis and max-width classes
  if (xs !== undefined) {
    const classes = getSizeClasses(xs);
    flexBasisClasses.push(classes.basis);
    maxWidthClasses.push(classes.maxWidth);
  }
  if (sm !== undefined) {
    const classes = getSizeClasses(sm);
    flexBasisClasses.push(`sm:${classes.basis}`);
    maxWidthClasses.push(`sm:${classes.maxWidth}`);
  }
  if (md !== undefined) {
    const classes = getSizeClasses(md);
    flexBasisClasses.push(`md:${classes.basis}`);
    maxWidthClasses.push(`md:${classes.maxWidth}`);
  }
  if (lg !== undefined) {
    const classes = getSizeClasses(lg);
    flexBasisClasses.push(`lg:${classes.basis}`);
    maxWidthClasses.push(`lg:${classes.maxWidth}`);
  }
  if (xl !== undefined) {
    const classes = getSizeClasses(xl);
    flexBasisClasses.push(`xl:${classes.basis}`);
    maxWidthClasses.push(`xl:${classes.maxWidth}`);
  }

  // Default to full width if no breakpoint specified
  if (flexBasisClasses.length === 0) {
    flexBasisClasses.push("basis-full");
    maxWidthClasses.push("max-w-full");
  }

  const baseClasses = `
    flex-grow-0
    flex-shrink-0
    px-3
    ${flexBasisClasses.join(" ")}
    ${maxWidthClasses.join(" ")}
    ${className}
  `.trim().replace(/\s+/g, " ");

  return <div className={baseClasses}>{children}</div>;
}
