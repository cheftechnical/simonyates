import { ReactNode } from "react";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function EmployerGridContainerNext(props: Props) {
  const { children } = props;

  if (!children) {
    return null;
  }

  return <div className="flex flex-wrap !mt-[79px]">{children}</div>;
}

