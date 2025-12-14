import { ReactNode } from "react";

interface Props {
  /**
   * The content of the description.
   */
  children?: ReactNode;
}

export default function WorkAtDescription(props: Props) {
  const { children } = props;

  return (
    <div className="mb-1">
      <p className="font-normal text-base leading-normal text-gray-700 mt-16 mb-[20px]">
        <em>{children}</em>
      </p>
    </div>
  );
}
