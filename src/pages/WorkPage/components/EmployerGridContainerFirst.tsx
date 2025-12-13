import { ReactNode } from "react";

interface Props {
  /**
   * The content of the grid container.
   */
  children: ReactNode;
}

export default function EmployerGridContainerFirst(props: Props) {
  const { children } = props;

  if (!children) {
    return null;
  }

  return <div className="flex flex-wrap !mt-[84px]">{children}</div>;
}

