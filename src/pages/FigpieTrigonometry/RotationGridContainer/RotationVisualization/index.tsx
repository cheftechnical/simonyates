import * as React from 'react';
import {color} from '../../../../styling/Color';
import {withStyles} from '@material-ui/core';
import {RotationD3} from './RotationD3';

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


class RotationVisualization extends React.Component<Props> {
	rotationD3 = new RotationD3();

	componentDidMount() {
		this.rotationD3.drawChart();
	}

	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {

	}

	render() {
		const {classes} = this.props;

		return (
			<div className={classes.root} id="RotationD3"/>
		)
	}
}

export default withStyles(styles)(RotationVisualization);