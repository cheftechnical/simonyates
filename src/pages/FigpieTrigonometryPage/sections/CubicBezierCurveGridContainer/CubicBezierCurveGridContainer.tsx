import { Grid } from "@mui/material";
import { ChangeEvent, memo, useState } from "react";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import { MyTextField2 } from "../../../../styling/MyTextField2/MyTextField2";
import BezierArcMathJax from "./CubicBezierCurveMathJax";
import CubicBezierCurveVisualization from "./CubicBezierCurveVisualization/CubicBezierCurveVisualization";

const startAngle = 360;

export const BezierArcGridContainer = memo(function () {
	const [radius, setRadius] = useState<number>(100.0);
	const [endAngle, setEndAngle] = useState<number>(315.0)

	const handleBezierArcVisualizationChange = ((newEndAngle: number, newRadius: number) => {
		setEndAngle(newEndAngle);
		setRadius(newRadius);
	});

  const handleEndAngleChange = ((event: ChangeEvent<HTMLInputElement>) => {
    setEndAngle(parseFloat(event.target.value));
	});

  const handleRadiusChange = ((event: ChangeEvent<HTMLInputElement>) => {
    setRadius(parseFloat(event.target.value));
	});

	return (
		<div>
			<MyGridContainer>
				<Grid item xs={6}>
          <CubicBezierCurveVisualization
            onChange={handleBezierArcVisualizationChange}
          />
				</Grid>
				<Grid item xs={6}>
					<MyGridContainer>
						<Grid item xs={6}>
              <MyTextField2
                disabled
                label="Radius"
                name="radius"
                onChange={handleRadiusChange}
                type="number"
                value={radius.toString()}
              />
						</Grid>
						<Grid item xs={6}>
              <MyTextField2
                label="End Angle"
                name="endAngle"
                onChange={handleEndAngleChange}
                type="number"
                value={endAngle.toString()}
              />
						</Grid>
					</MyGridContainer>

					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
					/>
				</Grid>
			</MyGridContainer>
			<MyGridContainer>
				<Grid item xs={2}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="S"
					/>
				</Grid>
				<Grid item xs={3}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="C1"
					/>
				</Grid>
				<Grid item xs={4}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="C2"
					/>
				</Grid>
				<Grid item xs={3}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="E"
					/>
				</Grid>
			</MyGridContainer>
		</div>
	)
});

export default CubicBezierCurveVisualization;
