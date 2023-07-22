import * as React from 'react';
import {color} from '../../../../../styling/Color/Color';
import {degToRad} from '../../../libs/trig';
import {makeStyles} from '@material-ui/core/styles';
import {AxisDirection} from '../AxisDirection';

// @ts-ignore
import MathJax from "mathjax3-react";

const timeout = 1000;

interface Props {
	inputDegrees: number;
	yAxisDirection: AxisDirection;
}

const useStyles = makeStyles(() => ({
	root: {
		color: color.grey['900'],
	},
}));

// export default function CircleBasicsMathJax(props: Props) {
export const CircleBasicsMathJax = React.memo(function (props: Props) {
	const classes = useStyles();
	const {inputDegrees, yAxisDirection} = props;

	const [formula, setFormula] = React.useState<string>();

	const refreshEquation = React.useCallback(() => {
		const theta = degToRad(inputDegrees);
		const x2 = Math.cos(theta);
		const y2 = Math.sin(theta) * yAxisDirection;

		const red500 = color.red['500'];
		const blue500 = color.blue['500'];

		const blue = String.raw`\color{${blue500}}`;
		const red = String.raw`\color{${red500}}`;

		const equation = String.raw`
			{${blue}{angle}} & = ${inputDegrees}^\circ \\
			\\
			{${red}\theta} & = {${blue}{angle}} * (\pi / 180) \\
				   & = {${blue}${inputDegrees}} * (\pi / 180) \\
				   & = ${theta.toFixed(3)} \\
			\\
			x_1 & = 0 \\
			\\
			y_1 & = 0 \\
			\\
			x_2 & = cos({${red}\theta}) \\ 
				& = cos({${red}${theta.toFixed(3)}}) \\
				& = ${x2.toFixed(3)} \\
			\\    
			y_2 & = sin({${red}\theta}) \\ 
				& = sin({${red}${theta.toFixed(3)}}) \\
				& = ${y2.toFixed(3)} \\
		`;

		setFormula(String.raw`$$					
			\begin{equation}
			\begin{split}
			${equation}
			\end{split}
			\end{equation}
		$$`);
	}, [inputDegrees, yAxisDirection]);

	const renderedFormula = React.useMemo(() => {
		return (
			<MathJax.Formula formula={formula}/>
		);
	}, [formula]);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			refreshEquation();
		}, timeout);

		return () => clearTimeout(timer);
	}, [refreshEquation, inputDegrees, yAxisDirection]);

	return (
		<div className={classes.root}>
			{renderedFormula}
		</div>
	)
});
