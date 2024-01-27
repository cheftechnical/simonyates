import {styled, Typography} from "@mui/material";

interface Props {
  children?: any;
}

// const useStyles = makeStyles((themeMui) => ({
// 	typography: {
// 		marginBottom: themeMui.spacing(16/8)
// 	}
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(16 / 8)
})) as typeof Typography;


export default function SectionTitle(props: Props) {
  const {children} = props;

  return (
    <StyledTypography component="h2" variant="primaryH2">
      {children}
    </StyledTypography>
  );
};
