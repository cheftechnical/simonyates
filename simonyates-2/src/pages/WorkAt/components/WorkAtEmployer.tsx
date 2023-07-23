// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';
import Typography from '../../../styling/Typography/Typography';
import {styled} from "@mui/material";

interface Props {
  employer: string;
}

// const useStyles = makeStyles(() => ({
//   employer: {
//     color: color.grey['600']
//   },
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
  color: color.grey['600']
}))

export default function WorkAtEmployer(props: Props) {
  // const classes = useStyles();
  const {employer} = props;

  return (
    <StyledTypography
      component="h1"
      group="primary"
      variant="h3"
      weight="regular">{employer}</StyledTypography>
  );
};