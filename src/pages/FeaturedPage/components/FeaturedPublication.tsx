import { color } from "../../../styling/Color/Color";
import FeaturedChips from "./FeaturedChips";
import { styled, Typography } from "@mui/material";

interface Props {
  children: any | any[] | never[];
  name: string;
  next?: boolean;
  publisher: string;
  tags: string[];
  when: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 	},
// 	rootNext: {
// 		paddingTop: themeMui.spacing(40/8),
// 	},
// 	name: {
// 		marginBottom: themeMui.spacing(16/8),
// 	},
// 	when: {
// 		color: color.grey['600'],
// 	},
// 	children: {
// 		color: color.grey['700']
// 	},
// 	publisher: {
// 		color: color.grey['600'],
// 	}
// }));

const StyledDivChildren = styled("div")(() => ({
  color: color.grey["700"],
}));

const StyledDivRoot = styled("div")(() => ({
  // default
}));

const StyledDivRootNext = styled(StyledDivRoot)(({ theme }) => ({
  paddingTop: theme.spacing(40 / 8),
}));

const StyledTypographyName = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(16 / 8),
})) as typeof Typography;

const StyledTypographyPublisher = styled(Typography)(() => ({
  color: color.grey["600"],
})) as typeof Typography;

const StyledTypographyWhen = styled(Typography)(() => ({
  color: color.grey["600"],
})) as typeof Typography;

export default function FeaturedPublication(props: Props) {
  // const classes = useStyles();
  const { children, name, next, publisher, tags, when } = props;

  // @todo mui5
  // const rootClass = (next)
  // 	? `${classes.root} ${classes.rootNext}`
  // 	: classes.root;

  const MyStyledDivRoot = next ? StyledDivRootNext : StyledDivRoot;

  return (
    <MyStyledDivRoot>
      <StyledTypographyName component="h3" variant="primaryH4Semibold">
        {name}
      </StyledTypographyName>

      <StyledTypographyPublisher component="p" variant="primaryBody">
        {publisher}
      </StyledTypographyPublisher>

      <StyledTypographyWhen component="p" variant="primaryBody">
        {when}
      </StyledTypographyWhen>

      <FeaturedChips list={tags} />

      <StyledDivChildren>{children}</StyledDivChildren>
    </MyStyledDivRoot>
  );
}
