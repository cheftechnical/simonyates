import {styled} from "@mui/material";

interface Props {
  children: any;
  next?: boolean | undefined;
}

// const useStyles = makeStyles((themeMui) => ({
// 	root: {},
// 	rootNext: {
// 		paddingTop: themeMui.spacing(24 / 8)
// 	}
// }));

const StyledUl = styled('ul')(({theme}) => ({}));

const StyledUlNext = styled(StyledUl)(({theme}) => ({
  paddingTop: theme.spacing(24 / 8)
}))

export default function Ul(props: Props) {
  // const classes = useStyles();
  const {children, next} = props;

  // const rootClassName = (next)
  // 	? `${classes.root} ${classes.rootNext}`
  // 	: classes.root;
  //

  const MyStyledUl = (next)
    ? StyledUlNext
    : StyledUl;

  return (
    <MyStyledUl>{children}</MyStyledUl>
  );
};