import { Component, createRef } from "react";
import { MyBezierArcD3 } from "./MyBezierArcD3";
import color from "../../../../../styling/Color";
import * as d3 from "d3";

interface Props {
	onChange: (endAngle: number, radius: number) => void;
}


class BezierArcVisualization extends Component<Props> {
	myBezierArc = new MyBezierArcD3();
	containerRef = createRef<HTMLDivElement>();

	constructor(props: Props) {
		super(props);

		this.myBezierArc.onChange = (endAngle: number, radius: number) => {
			this.props.onChange(endAngle, radius);
		}
	}

	componentDidMount() {
		if (this.containerRef.current) {
			this.myBezierArc.drawChart(this.containerRef.current);
		}
	}

	componentWillUnmount() {
		// Cleanup: remove any SVG elements
		if (this.containerRef.current) {
			d3.select(this.containerRef.current).selectAll("svg").remove();
		}
	}

	render() {
    return (
      <div ref={this.containerRef} style={{
        backgroundColor: color.grey["50"],
        fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,
      }} />
    );
	}
}

export default BezierArcVisualization;
