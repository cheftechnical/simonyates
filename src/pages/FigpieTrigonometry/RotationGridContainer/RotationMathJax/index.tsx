import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../../styling/Color';

// @ts-ignore
import MathJax from "mathjax3-react";
import {degToRad} from '../../libs/trig';

const timeout = 1000;

interface Props {
	variable?: 'S' | 'C1' | 'C2' | 'E';
}

const useStyles = makeStyles((theme) => ({
	root: {
		color: color.grey['900'],
	},
}));

// @todo make this common (currently duplicate with Bezier Arc)
const d = (value: number): string => {
	return (Math.round(value * 10000) / 10000).toString();
}

export default function RotationMathJax(props: Props) {
	const classes = useStyles();

	const {variable} = props;

	const [formula, setFormula] = React.useState<string>();

	const refreshEquation = React.useCallback(() => {
		// inputs will eventually become properties, but i'm hard-coding now for dev
		const point = {
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
		};
		const thetaDeg = 45;
		const theta = degToRad(thetaDeg);
		const cosTheta = Math.cos(theta);
		const sinTheta = Math.sin(theta);

		const sXTimesCosTheta = point.s.x * cosTheta;
		const sXTimesSinTheta = point.s.x * sinTheta;
		const sYTimesSinTheta = point.s.y * sinTheta;
		const sYTimesCosTheta = point.s.y * cosTheta;
		const sX = sXTimesCosTheta - sYTimesSinTheta;
		const sY = sXTimesSinTheta + sYTimesCosTheta;

		const c1XTimesCosTheta = point.c1.x * cosTheta;
		const c1XTimesSinTheta = point.c1.x * sinTheta;
		const c1YTimesSinTheta = point.c1.y * sinTheta;
		const c1YTimesCosTheta = point.c1.y * cosTheta;
		const c1X = c1XTimesCosTheta - c1YTimesSinTheta;
		const c1Y = c1XTimesSinTheta + c1YTimesCosTheta;

		const c2XTimesCosTheta = point.c2.x * cosTheta;
		const c2XTimesSinTheta = point.c2.x * sinTheta;
		const c2YTimesSinTheta = point.c2.y * sinTheta;
		const c2YTimesCosTheta = point.c2.y * cosTheta;
		const c2X = c2XTimesCosTheta - c2YTimesSinTheta;
		const c2Y = c2XTimesSinTheta + c2YTimesCosTheta;

		const eXTimesCosTheta = point.e.x * cosTheta;
		const eXTimesSinTheta = point.e.x * sinTheta;
		const eYTimesSinTheta = point.e.y * sinTheta;
		const eYTimesCosTheta = point.e.y * cosTheta;
		const eX = eXTimesCosTheta - eYTimesSinTheta;
		const eY = eXTimesSinTheta + eYTimesCosTheta;

		const equation = ((): string => {
			switch (variable) {
				case 'S':
					return String.raw`
						S & = \begin{bmatrix}
						          x cos(\theta) - y sin(\theta) \\
						          x sin(\theta) + y cos(\theta)
						      \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${d(point.s.x)} cos(${d(theta)}) - ${d(point.s.y)} sin(${d(theta)}) \\
						          ${d(point.s.x)} sin(${d(theta)}) + ${d(point.s.y)} cos(${d(theta)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(point.s.x)} \times ${d(cosTheta)} - ${d(point.s.y)} \times ${d(sinTheta)} \\
					              ${d(point.s.x)} \times ${d(sinTheta)} + ${d(point.s.y)} \times ${d(cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(sXTimesCosTheta)} - ${d(sYTimesSinTheta)} \\
					              ${d(sXTimesSinTheta)} + ${d(sYTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(sX)} \\
					             ${d(sY)}
					          \end{bmatrix} 
					`;
				case 'C1':
					return String.raw`
						C_1 & = \begin{bmatrix}
						            x cos(\theta) - y sin(\theta) \\
						            x sin(\theta) + y cos(\theta)
						        \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${d(point.c1.x)} cos(${d(theta)}) - ${d(point.c1.y)} sin(${d(theta)}) \\
						          ${d(point.c1.x)} sin(${d(theta)}) + ${d(point.c1.y)} cos(${d(theta)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(point.c1.x)} \times ${d(cosTheta)} - ${d(point.c1.y)} \times ${d(sinTheta)} \\
					              ${d(point.c1.x)} \times ${d(sinTheta)} + ${d(point.c1.y)} \times ${d(cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(c1XTimesCosTheta)} - ${d(c1YTimesSinTheta)} \\
					              ${d(c1XTimesSinTheta)} + ${d(c1YTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(c1X)} \\
					             ${d(c1Y)}
					          \end{bmatrix} 
					`;
				case 'C2':
					return String.raw`
						C_2 & = \begin{bmatrix}
						            x cos(\theta) - y sin(\theta) \\
						            x sin(\theta) + y cos(\theta)
						         \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${d(point.c2.x)} cos(${d(theta)}) - ${d(point.c2.y)} sin(${d(theta)}) \\
						          ${d(point.c2.x)} sin(${d(theta)}) + ${d(point.c2.y)} cos(${d(theta)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(point.c2.x)} \times ${d(cosTheta)} - ${d(point.c2.y)} \times ${d(sinTheta)} \\
					              ${d(point.c2.x)} \times ${d(sinTheta)} + ${d(point.c2.y)} \times ${d(cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(c2XTimesCosTheta)} - ${d(c2YTimesSinTheta)} \\
					              ${d(c2XTimesSinTheta)} + ${d(c2YTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(c2X)} \\
					             ${d(c2Y)}
					          \end{bmatrix} 
					`;
				case 'E':
					return String.raw`
						E & = \begin{bmatrix}
						          x cos(\theta) - y sin(\theta) \\
						          x sin(\theta) + y cos(\theta)
						      \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${d(point.e.x)} cos(${d(theta)}) - ${d(point.e.y)} sin(${d(theta)}) \\
						          ${d(point.e.x)} sin(${d(theta)}) + ${d(point.e.y)} cos(${d(theta)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(point.e.x)} \times ${d(cosTheta)} - ${d(point.e.y)} \times ${d(sinTheta)} \\
					              ${d(point.e.x)} \times ${d(sinTheta)} + ${d(point.e.y)} \times ${d(cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(eXTimesCosTheta)} - ${d(eYTimesSinTheta)} \\
					              ${d(eXTimesSinTheta)} + ${d(eYTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(eX)} \\
					             ${d(eY)}
					          \end{bmatrix} 
					`;
				default:
					return String.raw`
						\theta & = ${thetaDeg}^\circ \\
						\\
						S & = (${point.s.x}, ${point.s.y}) \\
						\\
						C_1 & = (${point.c1.x}, ${point.c1.y}) \\
						\\
						C_2 & = (${point.c2.x}, ${point.c2.y}) \\
						\\
						E & = (${point.e.x}, ${point.e.y}) \\
					`;
			}
		})();

		setFormula(String.raw`$$
			\begin{equation}
			\begin{split}
			${equation}
			\end{split}
			\end{equation}
		$$`);
	}, [variable]);

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
	}, [refreshEquation, variable]);

	return (
		<div className={classes.root}>
			{renderedFormula}
		</div>
	)
}