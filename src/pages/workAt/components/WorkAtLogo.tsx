import Logo from "../../../components/Logo";
import { styled } from "@mui/material";

// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		paddingLeft: themeMui.spacing(8 / 8),
// 	}
// }));

const StyledDivRoot = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(8 / 8),
}));

interface Props {
  brand: any;
  variant: any;
}

export default function WorkAtLogo(props: Props) {
  // const classes = useStyles();
  const { brand, variant } = props;

  return (
    <StyledDivRoot>
      <Logo brand={brand} variant={variant} width="100%" />
    </StyledDivRoot>
  );
}
