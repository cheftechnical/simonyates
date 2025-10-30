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
    <p className="font-normal text-base leading-6 tracking-[0.5px] text-gray-600">
      {children}
    </p>
  );
}

