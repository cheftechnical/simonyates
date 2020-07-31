import * as React from 'react';
import Typography from '../../../styling/Typography';
import Photos from './Photos';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import MyContainer from '../../../styling/MyContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: rem(58)
	},
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
