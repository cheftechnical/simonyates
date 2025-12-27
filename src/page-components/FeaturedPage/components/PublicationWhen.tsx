import { ReactNode } from "react";

interface Props {
  /**
   * The publication date/when.
   */
  children: ReactNode;
}

export default function PublicationWhen(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal text-gray-600">
      {children}
    </p>
  );
}

