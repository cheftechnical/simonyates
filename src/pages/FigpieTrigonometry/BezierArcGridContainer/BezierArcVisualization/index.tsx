import * as React from 'react';
import {MyBezierArcD3} from './MyBezierArcD3';

interface Props {

}

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
		return (
			<div id="BezierArc"/>
		)
	}
}

export default BezierArcVisualization;
