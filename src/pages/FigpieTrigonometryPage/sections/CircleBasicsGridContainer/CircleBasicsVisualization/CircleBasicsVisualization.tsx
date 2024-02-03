import color from "../../../../../styling/Color";
import {AxisDirection} from '../AxisDirection';
import {CircleBasicsD3} from './CircleBasicsD3';
import {Component} from "react";

interface Props {
	// classes: any;
	yAxisDirection: AxisDirection;
	onChange: (angleDegrees: number) => void;
	value: number;
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

class CircleBasicsVisualization extends Component<Props> {
	circleBasicsD3 = new CircleBasicsD3();

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
		this.circleBasicsD3.drawChart();
	}

	/**
	 * When the component updates...
	 */
	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
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
		// const {classes} = this.props;

		// return (
		// 	<div className={classes.root} id="sincos"/>
		// )

    return (
      <div id="sincos" style={{
        backgroundColor: color.grey['50'],
        fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,

        '& .crisp': {
          shapeRendering: 'crispEdges',
        }
      }}/>
    )
	}
}

// @todo mui5
// export default withStyles(styles)(CircleBasicsVisualization);

export default CircleBasicsVisualization;