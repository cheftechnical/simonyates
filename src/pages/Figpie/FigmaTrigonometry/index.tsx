import * as React from 'react';
import SinCos from './SinCos';
import {Grid} from '@material-ui/core';
import DefaultLayout from '../../../layouts/Default';
import MyContainer from '../../../styling/MyContainer';
import {makeStyles} from '@material-ui/core/styles';
import {degToRad} from './SinCos/trig';
import SinCosMath from './SinCosMath';
// @ts-ignore
import MathJax from "mathjax3-react";
import MyTextField from '../../../styling/MyTextField';
import MyGridContainer from '../../../styling/MyGridContainer';
import {color} from '../../../styling/Color';

// https://github.com/asnunes/mathjax3-react <-- vastuly superior

const useStyles = makeStyles((theme) => ({
	root: {
		color: color.grey['900'],
	},
}));

const defaultFormula = {
	vector: ''
}

function FigmaTrigonometryMaths() {
	const classes = useStyles();

	const [formula, setFormula] = React.useState(defaultFormula);
	const [inputDegrees, setInputDegrees] = React.useState<number>(0);

	// const handleSliderChange = React.useCallback((event: any, newValue: number | number[]) => {
	const handleInputDegreesChange = React.useCallback((event) => {
		setInputDegrees(event.target.value);
	}, []);

	const handleSinCosChange = React.useCallback((angleDegrees: number) => {
		setInputDegrees(angleDegrees);
	}, []);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			const theta = degToRad(inputDegrees);
			const x2 = Math.cos(theta);
			const y2 = Math.sin(theta) * -1;

			const red500 = color.red['500'];
			const blue500 = color.blue['500'];

			const blue = String.raw`\color{${blue500}}`;
			const red = String.raw`\color{${red500}}`;

			/*
			v_1 & = egin{bmatrix}
							x_1 & y_1 \
							x_2 & y_2 \
							end{bmatrix} \
					\
					v_1 & = egin{bmatrix}
							0 & cos(	heta) \
							0 & sin(	heta) \
							end{bmatrix} \
					\
			 */
			setFormula({
				vector: String.raw `$$					
					\begin{equation}
					\begin{split}
					{${blue}{angle}} & = ${inputDegrees}^\circ \\
					\\
					{${red}\theta} & = {${blue}{angle}} * (\pi / 180) \\
					       & = {${blue}${inputDegrees}} * (\pi / 180) \\
					       & = ${theta.toFixed(3)} \\
					\\
					x_1 & = 0 \\
					\\
					x_2 & = cos({${red}\theta}) \\ 
					    & = cos({${red}${theta.toFixed(3)}}) \\
					    & = ${x2.toFixed(3)} \\
					\\
					y_1 & = 0 \\
					\\    
					y_2 & = sin({${red}\theta}) \\ 
					    & = sin({${red}${theta.toFixed(3)}}) \\
					    & = ${y2.toFixed(3)} \\
					\\
					\end{split}
					\end{equation}
				$$`,
			});

		}, 10);
		return () => clearTimeout(timer);
	}, [inputDegrees]);

	return (
		<DefaultLayout title="Trigonometry" top="figpie">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={6}>
						<SinCos
							onChange={handleSinCosChange}
							value={inputDegrees}
						/>
					</Grid>
					<Grid item xs={6}>
						<MyTextField
							label="Input Degrees"
							onChange={handleInputDegreesChange}
							type="number"
							value={inputDegrees}
						/>
						<div className={classes.root}>
							<SinCosMath formula={formula.vector}/>
						</div>
					</Grid>
				</MyGridContainer>
			</MyContainer>
		</DefaultLayout>
	)
}

export default function FigmaTrigonometry() {
	return (
		<MathJax.Provider
			options={{
				loader: {
					load: [
						'[tex]/color',
					]
				},
				tex: {
					packages: {
						'[+]': ['color']
					},
				},
			}}
		>
			<FigmaTrigonometryMaths/>
		</MathJax.Provider>
	)
}