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
      <p className="font-normal text-base leading-6 tracking-[0.5px] text-gray-600 mb-[20px]">
        {children}
      </p>
    </div>
  );
}
