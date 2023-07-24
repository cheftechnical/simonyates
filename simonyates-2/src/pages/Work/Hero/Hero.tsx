import Typography from '../../../styling/Typography/Typography';
import {Hidden} from "@mui/material";

export default function Hero() {
  return (
    <Typography component="h1" group="primary" variant="h2" weight="regular">
      <Hidden only={[/*'xs',*/ 'sm', 'md', 'lg', 'xl']}>
        Here is a glimpse of my life,
        mostly as a&nbsp;programmer.
      </Hidden>

      <Hidden only={['xs',  /*'sm', 'md','lg', 'xl'*/]}>
        Here is a glimpse of my life,<br/>
        mostly as a programmer.
      </Hidden>
    </Typography>
  );
};
