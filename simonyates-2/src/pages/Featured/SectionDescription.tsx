import Typography from '../../styling/Typography/Typography';
import {color} from '../../styling/Color/Color';
import {styled} from "@mui/material";

interface Props {
  children?: any;
}

// const useStyles = makeStyles((theme) => ({
// 	intro: {
// 		marginBottom: theme.spacing(40/8),
// 		color: color.grey['700']
// 	}
// }));
const StyledTypography = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(40 / 8),
  color: color.grey['700']
}))

export default function SectionDescription(props: Props) {
  // const classes = useStyles();

  const {children} = props;

  return (
    <StyledTypography group="primary" variant="body" weight="regular">
      {children}
    </StyledTypography>
  );
};
