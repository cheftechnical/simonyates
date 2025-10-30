import { ReactNode, useMemo } from "react";

export interface Props {
  /**
   * The content of the callout.
   */
  children?: ReactNode;
  /**
   * Component class name
   */
  className?: string;
  /**
   * If you pass a an array to the component, it will automatically delimit the list with a bullet
   */
  list?: string[];
  /**
   * If `true`, the component will not have any gutter space at the bottom of the component
   */
  noBottomGutter?: boolean;
  /**
   * The variant to use.
   */
  variant?: "default" | "alert";
}

const defaultProps = {
  noBottomGutter: false,
  variant: "default",
};

interface DelimiterProps {
  index: number;
  length: number;
}

function Delimiter(props: DelimiterProps) {
  const { index, length } = props;

  // Don't append a delimiter to the last item
  if (index === length - 1) {
    return <></>;
  }

  // Prevent orphan of 2nd-last item
  if (index === length - 2) {
    return <>&nbsp;&bull;&nbsp;</>;
  }

  // Render all other items normally
  return <span> &bull; </span>;
}

export default function Callout(props: Props) {
  const { children, className, list, noBottomGutter, variant } = {
    ...defaultProps,
    ...props,
  };

  const content = useMemo(() => {
    if (!list) return children;

    return list.map((item, index) => (
      <span key={index}>
        {item}
        <Delimiter index={index} length={list.length} />
      </span>
    ));
  }, [children, list]);

  const isAlert = variant === "alert";

  const rootClasses = [
    "antialiased",
    // "min-h-16", // 64px (disabled to match observed measurement)
    "p-2", // 8px
    noBottomGutter ? "mt-6 mb-0" : "my-6", // 24px top/bottom
    "text-center",
    isAlert ? "bg-red-50" : "bg-lime-50",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const textClass = isAlert ? "text-red-500" : "text-gray-700";

  return (
    <div className={rootClasses}>
      <p className={`text-base leading-6 ${textClass}`}>{content}</p>
    </div>
  );
}
