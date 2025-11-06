import { ReactNode } from "react";
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
   * Where the event occurred.
   */
  where: string;
  /**
   * The event title.
   */
  title: ReactNode;
}

export default function Appearance(props: Props) {
  const { children, host, next, title, when } = props;

  return (
    // 16 px * 1.5 lineHeight = 24 px * 2 = 48 px
    <div className={next ? "pt-12" : ""}>
      <h3 className="font-semibold text-base leading-normal tracking-[0.5px]">
        {title}
      </h3>

      <p className="font-normal text-base leading-normal tracking-[0.5px] pt-[16px] text-gray-600">
        {host}
      </p>

      <EventWhen>{when}</EventWhen>

      <div>{children}</div>
    </div>
  );
}

