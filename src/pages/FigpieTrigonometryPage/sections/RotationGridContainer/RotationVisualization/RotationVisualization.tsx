import color from "../../../../../styling/Color";
import { RotationD3 } from "./RotationD3";
import { Component } from "react";

interface Props {
	onChange: (endAngle: number) => void;
}

class RotationVisualization extends Component<Props> {
	rotationD3 = new RotationD3();

	constructor(props: Props) {
		super(props);

		this.rotationD3.onChange = (endAngle: number) => {
			this.props.onChange(endAngle);
		}
	}

	componentDidMount() {
		this.rotationD3.drawChart();
	}

  // componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
  //
  // }

	render() {
    // const {classes} = this.props;

    // return (
    // 	<div className={classes.root} id="RotationD3"/>
    // )

    return (
      <div id="RotationD3" style={{
        backgroundColor: color.grey["50"],
        fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,

        // "& .crisp": {
        //   shapeRendering: "crispEdges"
        // }
      }} />
    );
  }
}

export default RotationVisualization;