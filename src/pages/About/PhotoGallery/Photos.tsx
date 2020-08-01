import * as React from 'react';
import {Grid} from '@material-ui/core';
import Image from '../../../components/Image';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import MyGridContainer from '../../../styling/MyGridContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: rem(24)
	}
}));

export default function Photos() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<MyGridContainer>
				<Grid item xs={3}>
					<Image alt="Jean'is Joplin" src="/images/about/photo-gallery/jean.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Mexico" src="/images/about/photo-gallery/mexico-1.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Mexico" src="/images/about/photo-gallery/mexico-2.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Mexico" src="/images/about/photo-gallery/mexico-3.png"/>
				</Grid>
			</MyGridContainer>
		</div>
	);
};