import { format, utcToZonedTime } from "date-fns-tz";
import { Box, Typography } from "@mui/material";

export interface Props {
  now: Date;
  timeZone: string;
}

export function DateTime(props: Props) {
  const { now, timeZone } = props;

  const zonedDate = utcToZonedTime(now, timeZone);

  return (
    <Box textAlign="center">
      <Typography component="h4" variant="primaryH4">
        ({format(zonedDate, "O", { timeZone: timeZone })})<br />
        {/*{format(zonedDate, 'zzzz', {timeZone: timeZone})}<br/> remmed out before */}
        {timeZone}
      </Typography>

      <Typography component="p" variant="primaryBody">
        {format(zonedDate, "EEEE, MMMM d, yyyy")}
        <br />
        {format(zonedDate, "HH:mm:ss")}
        <br />
        {format(zonedDate, "hh:mm:ss aaa")}
        <br />
      </Typography>
    </Box>
  );
}

export default DateTime;
