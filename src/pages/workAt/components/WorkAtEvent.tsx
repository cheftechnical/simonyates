import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

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
  // const classes = useStyles();
  const { date, next, title } = props;

  return (
    <Box
      sx={(theme) => ({
        paddingTop: next ? theme.spacing(2) : 0,
      })}
    >
      <Typography component="p" variant="primaryBody">
        {date} &bull; {title}
      </Typography>
    </Box>
  );
}
