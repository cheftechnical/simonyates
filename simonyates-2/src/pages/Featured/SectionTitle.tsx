import Typography from '../../styling/Typography/Typography';
import {styled} from "@mui/material";

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
}))


export default function SectionTitle(props: Props) {
  const {children} = props;

  return (
    <StyledTypography group="primary" variant="h2" weight="regular">
      {children}
    </StyledTypography>
  );
};
