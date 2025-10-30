import { ReactNode } from "react";
import EventTitle from "./EventTitle";
import EventHost from "./EventHost";
import EventWhen from "./EventWhen";

interface Props {
  /**
   * The event content/description.
   */
  children?: ReactNode;
  /**
   * The event host name.
   */
  host: string;
  /**
   * Whether this is the next event (adds top padding).
   */
  next?: boolean;
  /**
   * When the event occurred.
   */
  when: string;
  /**
   * The event title.
   */
  title: string;
}

export default function FeaturedEvent(props: Props) {
  const { children, host, next, title, when } = props;

  return (
    <div className={next ? "pt-[40px]" : ""}>
      <EventTitle>{title}</EventTitle>

      <EventHost>{host}</EventHost>

      <EventWhen>{when}</EventWhen>

      <div>{children}</div>
    </div>
  );
}
