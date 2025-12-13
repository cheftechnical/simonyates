import { ReactNode } from "react";

interface Props {
  /**
   * Date of the event
   */
  date: string;
  /**
   * If `true`, additional padding will be applied to the top of the component
   */
  next?: boolean;
  /**
   * Title of the event
   */
  title: ReactNode | string;
}

export default function WorkAtEvent(props: Props) {
  const { date, next, title } = props;

  return (
    <div className={next ? "pt-4" : ""}>
      <p className="font-primary font-normal text-base leading-normal tracking-[0.5px]">
        {/* I felt that emsp was too much space, so I used ensp instead */}
        {date}&ensp;&bull;&ensp;{title}
      </p>
    </div>
  );
}
