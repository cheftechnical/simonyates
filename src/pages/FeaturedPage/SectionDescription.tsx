import { color } from "../../styling/Color/Color";
import { styled, Typography } from "@mui/material";

interface Props {
  children?: any;
}

// const useStyles = makeStyles((themeMui) => ({
// 	intro: {
// 		marginBottom: themeMui.spacing(40/8),
// 		color: color.grey['700']
// 	}
// }));
const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(40 / 8),
  color: color.grey["700"],
})) as typeof Typography;

export default function SectionDescription(props: Props) {
  // const classes = useStyles();

  const { children } = props;

  return (
    <StyledTypography component="p" variant="primaryBody">
      {children}
    </StyledTypography>
  );
}
