import color from "../../../../../styling/Color";
import { RotationD3 } from "./RotationD3";
import { Component, createRef } from "react";
import * as d3 from "d3";

interface Props {
	onChange: (endAngle: number) => void;
}

class RotationVisualization extends Component<Props> {
	rotationD3 = new RotationD3();
	containerRef = createRef<HTMLDivElement>();

	constructor(props: Props) {
		super(props);

		this.rotationD3.onChange = (endAngle: number) => {
			this.props.onChange(endAngle);
		}
	}

	componentDidMount() {
		if (this.containerRef.current) {
			this.rotationD3.drawChart(this.containerRef.current);
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

export default RotationVisualization;