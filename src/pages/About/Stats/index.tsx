import * as React from 'react';
import {Grid, Hidden} from '@material-ui/core';
import StatsItem from './StatsItem';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';
import MyContainer from '../../../styling/MyContainer';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {Carousel} from 'react-responsive-carousel';

import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(60 / 8),
		paddingBottom: theme.spacing(36 / 8),
		backgroundColor: color.grey['50']
	},

	carouselActive: {

	},
	carouselIndicator: {

	}
}));

export default function Stats() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* Desktop */}
			<Hidden smDown>
				<MyContainer>
					<Grid container spacing={10}>
						<Grid item xs={3}>
							<StatsItem caption="years programming" value={25}/>
						</Grid>
						<Grid item xs={3}>
							<StatsItem caption="when I started programming" value={10}/>
						</Grid>
						<Grid item xs={3}>
							<StatsItem caption="software projects completed" value={200}/>
						</Grid>
						<Grid item xs={3}>
							<StatsItem caption="figma plugin" value={1}/>
						</Grid>
					</Grid>
				</MyContainer>
			</Hidden>

			{/*	Mobile */}
			<Hidden mdUp>
				{/* @todo This needs to be fixed */}
				{/*<Carousel*/}
				{/*	autoPlay={false}*/}
				{/*	animation="slide"*/}
				{/*	activeIndicatorProps={{className: classes.carouselActive, style: {}}}*/}
				{/*	indicatorProps={{className: classes.carouselActive, style: {}}}*/}
				{/*>*/}
				{/*	<div>*/}
				{/*		<StatsItem caption="years programming" value={25}/>*/}
				{/*	</div>*/}
				{/*	<div>*/}
				{/*		<StatsItem caption="when I started programming" value={10}/>*/}
				{/*	</div>*/}
				{/*	<div>*/}
				{/*		<StatsItem caption="software projects completed" value={200}/>*/}
				{/*	</div>*/}
				{/*	<div>*/}
				{/*		<StatsItem caption="awesome girlfriend" value={1}/>*/}
				{/*	</div>*/}
				{/*</Carousel>*/}
			</Hidden>
		</div>
	);
};
