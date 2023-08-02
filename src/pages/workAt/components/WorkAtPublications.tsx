import rem from '../../../styling/rem';
import ConditionalIndent from '../../../components/ConditionalIndent/ConditionalIndent';
import {Box} from "@mui/material";

interface Props {
  children?: any;
  next?: boolean;
}

// const useStyles = makeStyles((themeMui: Theme) => ({
// 	root: {},
//
// 	next: {
// 		paddingTop: rem(40),
// 	}
// }));

export default function WorkAtPublications(props: Props) {
  // const classes = useStyles();
  const {children, next} = props;

  // const rootClassName = (next)
  // 	? `${classes.root} ${classes.next}`
  // 	: classes.root;

  return (
    <Box sx={(theme) => ({
      paddingTop: next ? theme.spacing(5) : 0
    })}>
      <ConditionalIndent>
        {children}
      </ConditionalIndent>
    </Box>
  );
}