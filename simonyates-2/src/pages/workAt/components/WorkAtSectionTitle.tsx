import {styled, Typography} from "@mui/material";

interface Props {
  children?: any;
}

// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		marginTop: themeMui.spacing((80-12) / 8),
// 		marginBottom: themeMui.spacing(32 / 8)
// 	}
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing((80 - 12) / 8),
  marginBottom: theme.spacing(32 / 8)
})) as typeof Typography;

export default function WorkAtSectionTitle(props: Props) {
  const {children} = props;

  return (
    <StyledTypography component="h2" variant="primaryH3">
      {children}
    </StyledTypography>
  );
};
