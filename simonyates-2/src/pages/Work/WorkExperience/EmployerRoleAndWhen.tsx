// import * as React from 'react';
// import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Typography from '../../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';

interface Props {
  employer: string;
  href: string;
  role: string;
  when: string;
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginBottom: theme.spacing(72 / 8)
//   },
//   employer: {
//     marginBottom: theme.spacing(20 / 8)
//   },
//   h3Link: {
//     color: color.grey['600'],
//     '&:hover': {
//       color: color.grey['600'],
//     }
//   },
//   readFullDetails: {
//     marginTop: theme.spacing(32 / 8)
//   },
//   when: {
//     whiteSpace: 'nowrap'
//   }
// }));

export default function EmployerRollAndWhen(props: Props) {
  // const classes = useStyles();
  const {employer, href, role, when} = props;

  // return (
  //   <Typography className={classes.employer} component="h2" group="primary" variant="h3" weight="regular">
  //     <Link
  //       className={classes.h3Link}
  //       component={ReactRouterDom}
  //       to={href}
  //     >
  //       {employer}, {role}, <span className={classes.when}>{when}</span>
  //     </Link>
  //   </Typography>
  // );

  return (
      <div>[EmployerRoleAndWhere]</div>
  )
}