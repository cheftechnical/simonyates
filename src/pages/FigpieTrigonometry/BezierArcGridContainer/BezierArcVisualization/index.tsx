import * as React from 'react';
import {MyBezierArcD3} from './MyBezierArcD3';
import {color} from '../../../../styling/Color';
import {withStyles} from '@material-ui/core';

interface Props {
	classes: any;
}

const styles = () => ({
	root: {
		backgroundColor: color.grey['50'],
		fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,

		'& .crisp': {
			shapeRendering: 'crispEdges',
		}
	}
})


class BezierArcVisualization extends React.Component<Props> {
	myBezierArc = new MyBezierArcD3();

	componentDidMount() {
		this.drawChart();
	}

	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {

	}

	drawChart() {
		this.myBezierArc.drawChart();
	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.root} id="BezierArc"/>
		)
	}
}

export default withStyles(styles)(BezierArcVisualization);