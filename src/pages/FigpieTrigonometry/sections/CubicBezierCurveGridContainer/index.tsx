import * as React from 'react';
import MyGridContainer from '../../../../styling/MyGridContainer';
import {Grid} from '@material-ui/core';
import CubicBezierCurveVisualization from './CubicBezierCurveVisualization';
import BezierArcMathJax from './CubicBezierCurveMathJax';
import MyTextField from '../../../../styling/MyTextField';

const startAngle = 360;

export default function BezierArcGridContainer() {
	const [radius, setRadius] = React.useState<number>(100.0);
	const [endAngle, setEndAngle] = React.useState<number>(315.0)

	const handleBezierArcVisualizationChange = React.useCallback((newEndAngle: number, newRadius: number) => {
		setEndAngle(newEndAngle);
		setRadius(newRadius);
	}, []);

	const handleEndAngleChange = React.useCallback((event) => {
		setEndAngle(event.target.value);
	}, []);

	const handleRadiusChange = React.useCallback((event) => {
		setRadius(event.target.value);
	}, []);

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
							<MyTextField
								disabled
								label="Radius"
								onChange={handleRadiusChange}
								type="number"
								value={radius}
							/>
						</Grid>
						<Grid item xs={6}>
							<MyTextField
								label="End Angle"
								onChange={handleEndAngleChange}
								type="number"
								value={endAngle}
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
}
