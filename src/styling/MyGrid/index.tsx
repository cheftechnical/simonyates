import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MyGridContainer from '../MyGridContainer';
import MyContainer from '../MyContainer';

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: 'magenta'
	},
	gridItem: {
		backgroundColor: 'silver',
	}
}));

export default function MyGrid() {
	const classes = useStyles();

	//<Container className={classes.container} disableGutters>
	return (
		<MyContainer>
			<MyGridContainer>
				<Grid container spacing={3}>
					<Grid item className={classes.gridItem} xs={1}><Content>1</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>2</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>3</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>4</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>5</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>6</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>7</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>8</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>9</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>10</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>11</Content></Grid>
					<Grid item className={classes.gridItem} xs={1}><Content>12</Content></Grid>
				</Grid>
			</MyGridContainer>
		</MyContainer>
	);
};

interface ContentProps {
	children?: any;
}

const useContentStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'pink',
		height: '100px'
	}
}));

function Content(props: ContentProps) {
	const classes = useContentStyles();
	const {children} = props;

	return (
		<div className={classes.root}>{children}</div>
	)
}
