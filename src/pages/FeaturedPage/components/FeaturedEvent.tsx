import {color} from '../../../styling/Color/Color';
import {styled, Typography} from "@mui/material";

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

const StyledDivRoot = styled('div')(() => ({
  // default
}));

const StyledDivRootNext = styled(StyledDivRoot)(({theme}) => ({
  paddingTop: theme.spacing(40 / 8)
}));

const StyledTypographyHost = styled(Typography)(({theme}) => ({
  paddingTop: theme.spacing(16 / 8),
  color: color.grey['600']
})) as typeof Typography;

const StyledTypographyWhen = styled(Typography)(() => ({
  color: color.grey['600']
})) as typeof Typography;

export default function FeaturedEvent(props: Props) {
  // const classes = useStyles();
  const {children, host, next, title, when} = props;

  const MyStyledDivRoot = (next) ? StyledDivRoot : StyledDivRootNext;

  return (
    <MyStyledDivRoot>
      <Typography component="h3" variant="primaryH4Semibold">
        {title}
      </Typography>

      <StyledTypographyHost component="p" variant="primaryBody">
        {host}
      </StyledTypographyHost>

      <StyledTypographyWhen component="p" variant="primaryBody">
        {when}
      </StyledTypographyWhen>

      <div>
        {children}
      </div>
    </MyStyledDivRoot>
  );
};