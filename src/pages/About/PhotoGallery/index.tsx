import * as React from 'react';
import Typography from '../../../styling/Typography';
import Photos from './Photos';
import {makeStyles} from '@material-ui/core/styles';
import MyContainer from '../../../styling/MyContainer';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

export default function PhotoGallery() {
	const classes = useStyles();

	return (
		<MyContainer className={classes.root}>
			<Typography group="primary" variant="body" weight="regular">
				In case you&rsquo;re curious, here are some of my photos from traveling
			</Typography>
			<Photos/>
		</MyContainer>
	);
};
