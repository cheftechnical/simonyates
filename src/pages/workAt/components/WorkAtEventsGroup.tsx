import rem from '../../../styling/rem';
import ConditionalIndent from '../../../components/ConditionalIndent/ConditionalIndent';
import {useMemo} from 'react';
import {Box, Link, Typography} from "@mui/material";

interface Props {
  children?: any;
  /**
   * If provided, the group name will be a link
   */
  href?: string;
  /**
   * The group name
   */
  name: string;
  /**
   * If `true`, additional padding will be added to the top of the component
   */
  next?: boolean;
}

// const useStyles = makeStyles(() => ({
//   root: {},
//   next: {
//     paddingTop: rem(40),
//   }
// }));

export default function WorkAtEventsGroup(props: Props) {
  // const classes = useStyles();
  const {children, href, name, next} = props;

  // const className = (next)
  //   ? `${classes.root} ${classes.next}`
  //   : classes.root;

  const renderedName = useMemo(() => {
    if (href) {
      return (
        <Link href={href} target="_blank">{name}</Link>
      );
    } else {
      return <>{name}</>;
    }
  }, [href, name]);

  return (
    // <ConditionalIndent className={className}>
    <Box pt={next ? rem(40) : 0}>
      <ConditionalIndent>
        <Typography component="h3" variant="primaryH4Semibold">
          {renderedName}
        </Typography>
        <div>{children}</div>
      </ConditionalIndent>
    </Box>
  );
};
