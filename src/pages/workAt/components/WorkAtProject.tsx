import { Box, styled, Typography } from "@mui/material";
import { color } from "../../../styling/Color/Color";

interface Props {
  children?: any | any[];
  name: string;
  next?: boolean;
  when?: string;
}

// const useStyles = makeStyles((themeMui) => ({
//     root: {
//
//     },
//     nameAndWhen: {
//         marginBottom: themeMui.spacing(24/8),
//         color: color.grey['600']
//     },
//     next: {
//         marginTop: themeMui.spacing(56/8)
//     }
// }));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(24 / 8),
  color: color.grey["600"],
})) as typeof Typography;

export default function WorkAtProject(props: Props) {
  // const classes = useStyles();
  const { children, name, next, when } = props;

  // const className = (next)
  //     ? `${classes.root} ${classes.next}`
  //     : `${classes.root}`

  const optionalWhen = when ? <>, {when}</> : <></>;

  return (
    <Box mt={next ? 56 / 8 : 0}>
      <StyledTypography component="h3" variant="primaryH4Semibold">
        {name}
        {optionalWhen}
      </StyledTypography>
      <div>{children}</div>
    </Box>
  );
}
