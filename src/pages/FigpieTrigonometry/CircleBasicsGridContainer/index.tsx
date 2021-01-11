import * as React from 'react';
import SinCos from './CircleBasicsVisualization';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CircleBasicsMathJax from './CircleBasicsMathJax';
import MyTextField from '../../../styling/MyTextField';
import MyGridContainer from '../../../styling/MyGridContainer';
import {color} from '../../../styling/Color';
import {AxisDirection} from './AxisDirection';

// https://github.com/asnunes/mathjax3-react <-- vastuly superior

const useStyles = makeStyles((theme) => ({
	root: {
		color: color.grey['900'],
	},
}));

const defaultYAxisDirection: AxisDirection = -1;

export default function CircleBasicsGridContainer() {
	const classes = useStyles();

	const [yAxisDirection, setYAxisDirection] = React.useState(defaultYAxisDirection);
	const [inputDegrees, setInputDegrees] = React.useState<number>(0);

	const handleInputDegreesChange = React.useCallback((event) => {
		setInputDegrees(event.target.value);
	}, []);

	const handleSinCosChange = React.useCallback((angleDegrees: number) => {
		setInputDegrees(angleDegrees);
	}, []);

	React.useEffect(() => {
		const timer = setTimeout(() => {

		}, 10);
		return () => clearTimeout(timer);
	}, [inputDegrees, yAxisDirection]);

	return (
		<MyGridContainer>
			<Grid item xs={6}>
				<SinCos
					onChange={handleSinCosChange}
					value={inputDegrees}
					yAxisDirection={yAxisDirection}
				/>
				{/*{yAxisDirection}*/}
			</Grid>
			<Grid item xs={6}>
				<MyTextField
					label="Input Degrees"
					onChange={handleInputDegreesChange}
					type="number"
					value={inputDegrees}
				/>
				<div className={classes.root}>
					<CircleBasicsMathJax
						inputDegrees={inputDegrees}
						yAxisDirection={yAxisDirection}
					/>
				</div>
			</Grid>
		</MyGridContainer>
	)
}
