import { ReactNode } from "react";

interface Props {
  /**
   * The content of the list item.
   */
  children?: ReactNode;
}

export default function FeaturedLi(props: Props) {
  const { children } = props;

  return (
    <li className="font-normal text-base leading-6 tracking-[0.5px] mb-4 ml-[21px] pl-0 list-none text-gray-700 list-item-featured-bullet">
      {children}
    </li>
  );
}

