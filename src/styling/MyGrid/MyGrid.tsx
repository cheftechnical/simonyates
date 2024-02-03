import MyGridContainer from "../MyGridContainer/MyGridContainer";
import MyContainer from "../MyContainer/MyContainer";
import { Grid } from "@mui/material";

// const useStyles = makeStyles(() => ({
// 	container: {
// 		backgroundColor: 'magenta'
// 	},
// 	gridItem: {
// 		backgroundColor: 'silver',
// 	}
// }));

export default function MyGrid() {
  // const classes = useStyles();

  return (
    <MyContainer>
      <MyGridContainer>
        <Grid container spacing={3}>
          {/*<Grid item className={classes.gridItem} xs={1}><Content>1</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>2</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>3</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>4</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>5</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>6</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>7</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>8</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>9</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>10</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>11</Content></Grid>*/}
          {/*<Grid item className={classes.gridItem} xs={1}><Content>12</Content></Grid>*/}
        </Grid>
      </MyGridContainer>
    </MyContainer>
  );
}

// interface ContentProps {
// 	children?: any;
// }

// const useContentStyles = makeStyles(() => ({
// 	root: {
// 		backgroundColor: 'pink',
// 		height: '100px'
// 	}
// }));

// function Content(props: ContentProps) {
// 	// const classes = useContentStyles();
// 	const {children} = props;

// 	return (
// 		// <div className={classes.root}>{children}</div>
// 		<div>{children}</div>
// 	)
// }
