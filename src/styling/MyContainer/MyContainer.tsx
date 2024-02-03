import { Container } from "@mui/material";

interface Props {
  children: NonNullable<React.ReactNode>;
  className?: string | undefined;
  fullHeight?: boolean;
}

// const useStyles = makeStyles(() => ({
// 	fullHeight: {
// 		height: '100%'
// 	}
// }));

export default function MyContainer(props: Props) {
  // const classes = useStyles();
  const { children, className, fullHeight } = props;

  // const rootClassName = (fullHeight)
  // 	? `${classes.fullHeight} ${className}`
  // 	: className;

  // return (
  // 	<Container className={rootClassName}>
  // 		{children}
  // 	</Container>
  // );

  return (
    <Container
      sx={{
        height: fullHeight ? "100%" : "",
        // color:  fullHeight ? 'magenta !important' : 'inherit'
      }}
      className={className}
    >
      {children}
    </Container>
  );
}
