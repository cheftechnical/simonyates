import React from 'react';
import DefaultLayout from '../../layouts/Default';
import {makeStyles} from '@material-ui/core/styles';
import Content from './Content';
import MyContainer from '../../styling/MyContainer';

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
			<MyContainer className={classes.container}>
				<Content/>
			</MyContainer>
		</DefaultLayout>
	);
};
