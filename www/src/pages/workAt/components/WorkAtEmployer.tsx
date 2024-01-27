import {color} from '../../../styling/Color/Color';
import {styled, Typography} from "@mui/material";

interface Props {
  employer: string;
}

// const useStyles = makeStyles(() => ({
//   employer: {
//     color: color.grey['600']
//   },
// }));

const StyledTypography = styled(Typography)(() => ({
  color: color.grey['600']
})) as typeof Typography;

export default function WorkAtEmployer(props: Props) {
  // const classes = useStyles();
  const {employer} = props;

  return (
    <StyledTypography component="h1" variant="primaryH3">{employer}</StyledTypography>
  );
};