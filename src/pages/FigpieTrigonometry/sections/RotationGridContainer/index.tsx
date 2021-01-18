import * as React from 'react';
import MyGridContainer from '../../../../styling/MyGridContainer';
import {Grid} from '@material-ui/core';
import RotationMathJax from './RotationMathJax';
import RotationVisualization from './RotationVisualization';
import MyTextField from '../../../../styling/MyTextField';
import {CubicBezier} from '../../libs/CubicBezier';

const defaultCubicBezier: CubicBezier = {
	s: {
		x: 308,
		y: 0
	},
	c1: {
		x: 100,
		y: 25.5
	},
	c2: {
		x: 89.4,
		y: 51.9
	},
	e: {
		x: 70.7,
		y: 70.7
	}
}

export default function RotationGridContainer() {

	const [cubicBezier, setCubicBezier] = React.useState<CubicBezier>(defaultCubicBezier);
	const [theta, setTheta] = React.useState<number>(0);

	const handleRotationVisualizationChange = React.useCallback((newTheta: number) => {
		setTheta(newTheta);
	}, []);

	const handleThetaChange = React.useCallback((event) => {
		setTheta(event.target.value);
	}, []);

	return (
		<div>
			<MyGridContainer>
				<Grid item xs={6}>
					<RotationVisualization onChange={handleRotationVisualizationChange}/>
				</Grid>
				<Grid item xs={6}>
					<MyTextField
						label="Theta"
						onChange={handleThetaChange}
						type="number"
						value={theta}
					/>

					<RotationMathJax
						cubicBezier={cubicBezier}
						theta={theta}
					/>
				</Grid>
			</MyGridContainer>

			<MyGridContainer>
				<Grid item xs={6}>
					<RotationMathJax
						cubicBezier={cubicBezier}
						theta={theta}
						variable="S"
					/>
				</Grid>
				<Grid item xs={6}>
					<RotationMathJax
						cubicBezier={cubicBezier}
						theta={theta}
						variable="C1"
					/>
				</Grid>
				<Grid item xs={6}>
					<RotationMathJax
						cubicBezier={cubicBezier}
						theta={theta}
						variable="C2"
					/>
				</Grid>
				<Grid item xs={6}>
					<RotationMathJax
						cubicBezier={cubicBezier}
						theta={theta}
						variable="E"
					/>
				</Grid>
			</MyGridContainer>
		</div>
	)
}