import { ReactNode } from "react";

interface Props {
  /**
   * The publication content/description.
   */
  children: ReactNode;
}

export default function PublicationChildren(props: Props) {
  const { children } = props;

  return <div className="text-gray-700">{children}</div>;
}

