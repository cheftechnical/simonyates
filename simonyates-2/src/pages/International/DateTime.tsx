import {format, utcToZonedTime} from 'date-fns-tz';
import Typography from '../../styling/Typography/Typography';
import {Box} from "@mui/material";
// import {Box} from '@material-ui/core';

export interface Props {
  now: Date;
  timeZone: string;
}

export default function DateTime(props: Props) {
  const {now, timeZone} = props;

  const zonedDate = utcToZonedTime(now, timeZone);

  return (
    <Box textAlign="center">
      <Typography group="primary" variant="h4" weight="medium">
        ({format(zonedDate, 'O', {timeZone: timeZone})})<br/>
        {/*{format(zonedDate, 'zzzz', {timeZone: timeZone})}<br/>*/}
        {timeZone}
      </Typography>

      <Typography group="primary" variant="body" weight="regular">
        {format(zonedDate, 'EEEE, MMMM d, yyyy')}<br/>
        {format(zonedDate, 'HH:mm:ss')}<br/>
        {format(zonedDate, 'hh:mm:ss aaa')}<br/>
      </Typography>
    </Box>
  );
}