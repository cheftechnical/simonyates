import * as React from 'react';
import {Container} from '@material-ui/core';
import Typography from '../../../styling/Typography';
import Photos from './Photos';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: rem(58)
	},
}));

export default function PhotoGallery() {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography group="primary" variant="body" weight="regular">
				In case you&rsquo;re curious, here are some of my photos from traveling
			</Typography>
			<Photos/>
		</Container>
	);
};
