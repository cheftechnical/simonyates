import React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Content from './Content';

const useStyles = makeStyles((theme) => ({
	typography: {
		marginTop: theme.spacing(248 / 8),
		marginBottom: theme.spacing(416 / 8)
	},
	viewport: {
		height: '100%',
		// backgroundColor: 'magenta'
	}
}));

export default function Home() {
	const classes = useStyles();

	return (
		<DefaultLayout>
			<Container>
				<div className={classes.viewport}>
					<Content/>
				</div>
			</Container>
		</DefaultLayout>
	);
};

