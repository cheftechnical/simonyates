import {styled, Typography} from "@mui/material";

interface Props {
  children: any;
}

// const useStyles = makeStyles((themeMui) => ({
// 	role: {
// 		marginBottom: themeMui.spacing(8/8),
// 	},
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(8 / 8),
}))

export default function WorkAtRole(props: Props) {
  const {children} = props;

  return (
    <Typography component="p" variant="primaryH4" mb={1}>{children}</Typography>
  );
};
