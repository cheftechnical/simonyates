import {color} from '../../../styling/Color/Color';
import {styled, Typography} from "@mui/material";

interface Props {
  children: any;
}

// const useStyles = makeStyles((themeMui) => ({
//   root: {
//     marginBottom: themeMui.spacing(8 / 8)
//   },
//   description: {
//     marginBottom: themeMui.spacing((88 - 68) / 8), // 68 is margin top of section titles
//     color: color.grey['600']
//   }
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
  marginBottom: theme.spacing(8 / 8)
}));

const StyledTypographyDescription = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing((88 - 68) / 8), // 68 is margin top of section titles
  color: color.grey['600']
})) as typeof Typography;

export default function WorkAtDescription(props: Props) {
  // const classes = useStyles();
  const {children} = props;

  return (
    <StyledDivRoot>
      <StyledTypographyDescription component="p" variant="primaryBody">
        {children}
      </StyledTypographyDescription>
    </StyledDivRoot>
  );
};
