import * as React from 'react';
import MyGridContainer from '../../../styling/MyGridContainer';
import {Grid} from '@material-ui/core';
import RotationMathJax from './RotationMathJax';
import RotationVisualization from './RotationVisualization';
import MyTextField from '../../../styling/MyTextField';

export default function RotationGridContainer() {
	const [theta, setTheta] = React.useState<number>(0);

	const handleThetaChange = React.useCallback((event) => {
		setTheta(event.target.value);
	}, []);

	return (
		<div>
			<MyGridContainer>
				<Grid item xs={6}>
					<RotationVisualization/>
				</Grid>
				<Grid item xs={6}>
					<MyTextField
						label="Theta"
						onChange={handleThetaChange}
						type="number"
						value={theta}
					/>

					<RotationMathJax/>
				</Grid>
			</MyGridContainer>

			<MyGridContainer>
				<Grid item xs={6}>
					<RotationMathJax variable="S"/>
				</Grid>
				<Grid item xs={6}>
					<RotationMathJax variable="C1"/>
				</Grid>
				<Grid item xs={6}>
					<RotationMathJax variable="C2"/>
				</Grid>
				<Grid item xs={6}>
					<RotationMathJax variable="E"/>
				</Grid>
			</MyGridContainer>
		</div>
	)
}