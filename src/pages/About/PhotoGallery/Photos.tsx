import * as React from 'react';
import {Grid, Hidden} from '@material-ui/core';
import Image from '../../../components/Image';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import MyGridContainer from '../../../styling/MyGridContainer';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() => ({
	root: {
		paddingTop: rem(24)
	},

	carouselActive: {

	},
	carouselIndicator: {

	}
}));

export default function Photos() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* Desktop */}
			<Hidden smDown>
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
			</Hidden>

			{/*	Mobile */}
			<Hidden mdUp>
				<Carousel
					autoPlay={false}
					animation="slide"
					activeIndicatorProps={{className: classes.carouselActive, style: {}}}
					indicatorProps={{className: classes.carouselActive, style: {}}}
				>
					<div>
						<Image alt="Jean'is Joplin" src="/images/about/photo-gallery/jean.png"/>
					</div>
					<div>
						<Image alt="Mexico" src="/images/about/photo-gallery/mexico-1.png"/>
					</div>
					<div>
						<Image alt="Mexico" src="/images/about/photo-gallery/mexico-2.png"/>
					</div>
					<div>
						<Image alt="Mexico" src="/images/about/photo-gallery/mexico-3.png"/>
					</div>
				</Carousel>
			</Hidden>
		</div>
	);
};