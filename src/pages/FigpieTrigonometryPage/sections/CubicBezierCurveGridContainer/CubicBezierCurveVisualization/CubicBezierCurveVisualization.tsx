import { Component } from "react";
import { MyBezierArcD3 } from "./MyBezierArcD3";
import color from "../../../../../styling/Color";

interface Props {
	onChange: (endAngle: number, radius: number) => void;
}


class BezierArcVisualization extends Component<Props> {
	myBezierArc = new MyBezierArcD3();

	constructor(props: Props) {
		super(props);

		this.myBezierArc.onChange = (endAngle: number, radius: number) => {
			this.props.onChange(endAngle, radius);
		}
	}

	componentDidMount() {
		this.drawChart();
	}

  // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
  //
  // }

	drawChart() {
		this.myBezierArc.drawChart();
	}

	render() {
    // const {classes} = this.props;

    // return (
    // 	<div className={classes.root} id="BezierArc"/>
    // )

    return (
      <div id="BezierArc" style={{
        backgroundColor: color.grey["50"],
        fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,

        // "& .crisp": {
        //   shapeRendering: "crispEdges"
        // }
      }} />
    );
	}
}

// @todo mui5
// export default withStyles(styles)(BezierArcVisualization);

export default BezierArcVisualization;
