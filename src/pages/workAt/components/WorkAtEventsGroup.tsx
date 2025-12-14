import ConditionalIndent from "../../../components/ConditionalIndent/ConditionalIndent";
import { useMemo } from "react";

interface Props {
  children?: any;
  /**
   * If provided, the group name will be a link
   */
  href?: string;
  /**
   * The group name
   */
  name: string;
  /**
   * If `true`, additional padding will be added to the top of the component
   */
  next?: boolean;
}

export default function WorkAtEventsGroup(props: Props) {
  const { children, href, name, next } = props;

  const renderedName = useMemo(() => {
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 no-underline hover:underline">
          {name}
        </a>
      );
    } else {
      return <>{name}</>;
    }
  }, [href, name]);

  return (
    <div className={next ? "pt-10" : ""}>
      <ConditionalIndent>
        <h3 className="font-primary font-semibold text-base leading-normal">
          {renderedName}
        </h3>
        <div>{children}</div>
      </ConditionalIndent>
    </div>
  );
}
