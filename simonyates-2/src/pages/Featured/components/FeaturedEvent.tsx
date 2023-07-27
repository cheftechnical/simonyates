import Typography from '../../../styling/Typography/Typography';
import {color} from '../../../styling/Color/Color';
import {styled} from "@mui/material";

interface Props {
  children?: any;
  host: string;
  next?: boolean;
  when: string;
  title: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	root: {
//
// 	},
// 	rootNext: {
// 		paddingTop: themeMui.spacing(40 / 8)
// 	},
// 	host: {
// 		paddingTop: themeMui.spacing(16 / 8),
// 		color: color.grey['600']
// 	},
// 	when: {
// 		color: color.grey['600']
// 	}
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
  // default
}));

const StyledDivRootNext = styled(StyledDivRoot)(({theme}) => ({
  paddingTop: theme.spacing(40 / 8)
}));

const StyledTypographyHost = styled(Typography)(({theme}) => ({
  paddingTop: theme.spacing(16 / 8),
  color: color.grey['600']
}));

const StyledTypographyWhen = styled(Typography)(({theme}) => ({
  color: color.grey['600']
}))

export default function FeaturedEvent(props: Props) {
  // const classes = useStyles();
  const {children, host, next, title, when} = props;

  const MyStyledDivRoot = (next) ? StyledDivRoot : StyledDivRootNext;

  return (
    <MyStyledDivRoot>
      <Typography group="primary" component="h3" variant="h4" weight="medium">
        {title}
      </Typography>

      <StyledTypographyHost group="primary" variant="body" weight="regular">
        {host}
      </StyledTypographyHost>

      <StyledTypographyWhen group="primary" variant="body" weight="regular">
        {when}
      </StyledTypographyWhen>

      <div>
        {children}
      </div>
    </MyStyledDivRoot>
  );
};