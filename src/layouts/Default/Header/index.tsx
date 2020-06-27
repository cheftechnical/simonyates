import * as React from 'react';
import {AppBar, Button, Container, createStyles, IconButton, Theme, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		offset: theme.mixins.toolbar,
	}),
);

export default function Header() {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="fixed">
				<Container>
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</Container>
			</AppBar>
			<div className={classes.offset}/>
		</div>
	);
};

