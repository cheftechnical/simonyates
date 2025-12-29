import color from "../../../libs/Color";
import { AxisDirection } from "../AxisDirection";
import { CircleBasicsD3 } from "./CircleBasicsD3";
import * as d3 from "d3";
import { Component, createRef } from "react";

interface Props {
	yAxisDirection: AxisDirection;
	onChange: (angleDegrees: number) => void;
	value: number;
}

class CircleBasicsVisualization extends Component<Props> {
	circleBasicsD3 = new CircleBasicsD3();
	containerRef = createRef<HTMLDivElement>();

	constructor(props: Props) {
		super(props);

		this.state = {}

		this.circleBasicsD3.onChange = (angleDegrees: number) => {
			// console.log('onChange [37]', angleDegrees);
			this.props.onChange(angleDegrees);
		};

		this.circleBasicsD3.yAxisDirection = this.props.yAxisDirection;
	}

	/**
	 * When the component has mounted...
	 */
	componentDidMount() {
		if (this.containerRef.current) {
			this.circleBasicsD3.drawChart(this.containerRef.current);
		}
	}

	componentWillUnmount() {
		// Cleanup: remove any SVG elements
		if (this.containerRef.current) {
			d3.select(this.containerRef.current).selectAll("svg").remove();
		}
	}

	/**
	 * When the component updates...
	 */
  componentDidUpdate(prevProps: Readonly<Props>) {
		if (this.props.value !== prevProps.value) {
			// this.updateChart(this.props.value);
			this.circleBasicsD3.updateChart(this.props.value);
			this.circleBasicsD3.resetDragTouchPoint();
		}
	}

	/**
	 * Render the component
	 */
	render() {
    return (
      <div ref={this.containerRef} style={{
        backgroundColor: color.grey['50'],
        fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,
      }}/>
    )
	}
}

export default CircleBasicsVisualization;