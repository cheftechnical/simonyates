// import * as React from 'react';
import Typography from '../../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';

interface Props {
  children: any;
}

// const useStyles = makeStyles((themeMui) => ({
//   root: {
//     marginBottom: themeMui.spacing(8 / 8)
//   },
//   description: {
//     marginBottom: themeMui.spacing((88 - 68) / 8), // 68 is margin top of section titles
//     color: color.grey['600']
//   }
// }));

export default function WorkAtDescription(props: Props) {
  // const classes = useStyles();
  const {children} = props;

  // return (
  //   <div className={classes.root}>
  //     <Typography className={classes.description} group="primary" variant="body" weight="regular">
  //       {children}
  //     </Typography>
  //   </div>
  // );
  return (
      <div>[WorkAtDescription]</div>
  )
};
