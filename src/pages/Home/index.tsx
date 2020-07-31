import React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Content from './Content';

const useStyles = makeStyles((theme) => ({
	container: {
		height: '100%'
	},
	viewport: {
		height: '100%',
	},
}));

export default function Home() {
	const classes = useStyles();

	return (
		<DefaultLayout fullHeight>
			<Container className={classes.container}>
				<div className={classes.viewport}>
					<Content/>
				</div>
			</Container>
		</DefaultLayout>
	);
};

