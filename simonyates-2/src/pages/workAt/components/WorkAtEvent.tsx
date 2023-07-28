import {ReactNode} from 'react';
import {Box, Typography, useTheme} from "@mui/material";

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

// const useStyles = makeStyles((themeMui: Theme) => ({
//   next: {
//     paddingTop: themeMui.spacing(2),
//   }
// }));

export default function WorkAtEvent(props: Props) {
  // const classes = useStyles();
  const {date, next, title} = props;

  // this was commented out before i did the mui5 change
  // const className = (next)
  // 	? `${classes.root} ${classes.next}`
  // 	: classes.root;

  // this wasn't commented out until mui5
  // const className = classNames({
  //   [classes.next]: next,
  // });

  return (
    <Box sx={(theme) => ({
      paddingTop: next ? theme.spacing(2) : 0
    })}>
      <Typography component="p" variant="primaryBody">
        {date} &bull; {title}
      </Typography>
    </Box>
  );
};
