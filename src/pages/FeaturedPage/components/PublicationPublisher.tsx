import { ReactNode } from "react";

interface Props {
  /**
   * The publisher name.
   */
  children: ReactNode;
}

export default function PublicationPublisher(props: Props) {
  const { children } = props;

  return (
    <p className="font-normal text-base leading-normal text-gray-600">
      {children}
    </p>
  );
}

