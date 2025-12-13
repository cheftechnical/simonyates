import { ReactNode } from "react";

interface Props {
  /**
   * The content of the list item.
   */
  children?: ReactNode;
  /**
   * Additional CSS classes.
   */
  className?: string;
}

export default function Li(props: Props) {
  const { children, className } = props;

  const classes = [
    "font-normal",
    "text-base",
    "leading-normal",
    "tracking-[0.5px]",
    "mb-4",
    "ml-[21px]",
    "pl-0",
    "list-none",
    "text-gray-900",
    "list-item-custom-bullet",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  return <li className={classes}>{children}</li>;
}
