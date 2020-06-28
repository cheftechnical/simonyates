import * as React from 'react';
import {Grid} from '@material-ui/core';
import Image from '../../../components/Image';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: rem(24)
	}
}));

export default function Photos() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/jean.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/mexico-1.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/mexico-2.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/mexico-3.png"/>
				</Grid>
			</Grid>
		</div>
	);
};