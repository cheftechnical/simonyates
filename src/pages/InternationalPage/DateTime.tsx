import { format, toZonedTime } from "date-fns-tz";

export interface Props {
  now: Date;
  timeZone: string;
}

export function DateTime(props: Props) {
  const { now, timeZone } = props;

  const zonedDate = toZonedTime(now, timeZone);

  return (
    <div className="text-center">
      <h4 className="font-primary font-medium text-base leading-normal tracking-[0.5px]">
        ({format(zonedDate, "O", { timeZone: timeZone })})<br />
        {/*{format(zonedDate, 'zzzz', {timeZone: timeZone})}<br/> remmed out before */}
        {timeZone}
      </h4>

      <p className="font-primary font-normal text-base leading-normal tracking-[0.5px]">
        {format(zonedDate, "EEEE, MMMM d, yyyy")}
        <br />
        {format(zonedDate, "HH:mm:ss")}
        <br />
        {format(zonedDate, "hh:mm:ss aaa")}
        <br />
      </p>
    </div>
  );
}

export default DateTime;
