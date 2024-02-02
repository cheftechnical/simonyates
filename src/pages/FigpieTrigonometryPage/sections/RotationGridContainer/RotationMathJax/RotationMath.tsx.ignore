// import * as React from 'react';
import {memo, useCallback, useEffect, useMemo, useState} from "react";
import {color} from '../../../../../styling/Color/Color';
import {degToRad} from '../../../libs/trig';
// import {makeStyles} from '@material-ui/core/styles';
import {CubicBezier} from '../../../libs/CubicBezier';

// @ts-ignore
import MathJax from "mathjax3-react";
import {styled} from "@mui/material";

const timeout = 1000;

interface Props {
	cubicBezier: CubicBezier;
	theta: number;
	variable?: 'S' | 'C1' | 'C2' | 'E';
}

// const useStyles = makeStyles(() => ({
// 	root: {
// 		color: color.grey['900'],
// 	},
// }));

const StyledDiv = styled('div')(({theme}) => ({
	color: color.grey['900'],
}))

// @todo make this common (currently duplicate with Bezier Arc)
const d = (value: number): string => {
	return (Math.round(value * 10000) / 10000).toString();
}

// export default function RotationMathJax(props: Props) {
export const RotationMathJax = memo(function (props: Props) {
	// const classes = useStyles();
	const {cubicBezier, theta, variable} = props;

	const [formula, setFormula] = useState<string>();

	const refreshEquation = useCallback(() => {
		// inputs will eventually become properties, but i'm hard-coding now for dev
		// const point = {
		// 	s: {
		// 		x: 308,
		// 		y: 0
		// 	},
		// 	c1: {
		// 		x: 100,
		// 		y: 25.5
		// 	},
		// 	c2: {
		// 		x: 89.4,
		// 		y: 51.9
		// 	},
		// 	e: {
		// 		x: 70.7,
		// 		y: 70.7
		// 	}
		// };

		// const thetaDeg = 45;
		const thetaRad = degToRad(theta);
		const cosTheta = Math.cos(thetaRad);
		const sinTheta = Math.sin(thetaRad);

		const sXTimesCosTheta = cubicBezier.s.x * cosTheta;
		const sXTimesSinTheta = cubicBezier.s.x * sinTheta;
		const sYTimesSinTheta = cubicBezier.s.y * sinTheta;
		const sYTimesCosTheta = cubicBezier.s.y * cosTheta;
		const sX = sXTimesCosTheta - sYTimesSinTheta;
		const sY = sXTimesSinTheta + sYTimesCosTheta;

		const c1XTimesCosTheta = cubicBezier.c1.x * cosTheta;
		const c1XTimesSinTheta = cubicBezier.c1.x * sinTheta;
		const c1YTimesSinTheta = cubicBezier.c1.y * sinTheta;
		const c1YTimesCosTheta = cubicBezier.c1.y * cosTheta;
		const c1X = c1XTimesCosTheta - c1YTimesSinTheta;
		const c1Y = c1XTimesSinTheta + c1YTimesCosTheta;

		const c2XTimesCosTheta = cubicBezier.c2.x * cosTheta;
		const c2XTimesSinTheta = cubicBezier.c2.x * sinTheta;
		const c2YTimesSinTheta = cubicBezier.c2.y * sinTheta;
		const c2YTimesCosTheta = cubicBezier.c2.y * cosTheta;
		const c2X = c2XTimesCosTheta - c2YTimesSinTheta;
		const c2Y = c2XTimesSinTheta + c2YTimesCosTheta;

		const eXTimesCosTheta = cubicBezier.e.x * cosTheta;
		const eXTimesSinTheta = cubicBezier.e.x * sinTheta;
		const eYTimesSinTheta = cubicBezier.e.y * sinTheta;
		const eYTimesCosTheta = cubicBezier.e.y * cosTheta;
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
						          ${d(cubicBezier.s.x)} \times cos(${d(thetaRad)}) - ${d(cubicBezier.s.y)} sin(${d(thetaRad)}) \\
						          ${d(cubicBezier.s.x)} \times sin(${d(thetaRad)}) + ${d(cubicBezier.s.y)} cos(${d(thetaRad)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(cubicBezier.s.x)} \times ${d(cosTheta)} - ${d(cubicBezier.s.y)} \times ${d(sinTheta)} \\
					              ${d(cubicBezier.s.x)} \times ${d(sinTheta)} + ${d(cubicBezier.s.y)} \times ${d(cosTheta)} \\
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
						          ${d(cubicBezier.c1.x)} \times cos(${d(thetaRad)}) - ${d(cubicBezier.c1.y)} sin(${d(thetaRad)}) \\
						          ${d(cubicBezier.c1.x)} \times sin(${d(thetaRad)}) + ${d(cubicBezier.c1.y)} cos(${d(thetaRad)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(cubicBezier.c1.x)} \times ${d(cosTheta)} - ${d(cubicBezier.c1.y)} \times ${d(sinTheta)} \\
					              ${d(cubicBezier.c1.x)} \times ${d(sinTheta)} + ${d(cubicBezier.c1.y)} \times ${d(cosTheta)} \\
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
						          ${d(cubicBezier.c2.x)} \times cos(${d(thetaRad)}) - ${d(cubicBezier.c2.y)} sin(${d(thetaRad)}) \\
						          ${d(cubicBezier.c2.x)} \times sin(${d(thetaRad)}) + ${d(cubicBezier.c2.y)} cos(${d(thetaRad)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(cubicBezier.c2.x)} \times ${d(cosTheta)} - ${d(cubicBezier.c2.y)} \times ${d(sinTheta)} \\
					              ${d(cubicBezier.c2.x)} \times ${d(sinTheta)} + ${d(cubicBezier.c2.y)} \times ${d(cosTheta)} \\
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
						          ${d(cubicBezier.e.x)} \times cos(${d(thetaRad)}) - ${d(cubicBezier.e.y)} sin(${d(thetaRad)}) \\
						          ${d(cubicBezier.e.x)} \times sin(${d(thetaRad)}) + ${d(cubicBezier.e.y)} cos(${d(thetaRad)})
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${d(cubicBezier.e.x)} \times ${d(cosTheta)} - ${d(cubicBezier.e.y)} \times ${d(sinTheta)} \\
					              ${d(cubicBezier.e.x)} \times ${d(sinTheta)} + ${d(cubicBezier.e.y)} \times ${d(cosTheta)} \\
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
						\theta & = ${theta}^\circ \\
						\\
						S & = (${cubicBezier.s.x}, ${cubicBezier.s.y}) \\
						\\
						C_1 & = (${cubicBezier.c1.x}, ${cubicBezier.c1.y}) \\
						\\
						C_2 & = (${cubicBezier.c2.x}, ${cubicBezier.c2.y}) \\
						\\
						E & = (${cubicBezier.e.x}, ${cubicBezier.e.y}) \\
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

	}, [cubicBezier, theta, variable]);

	const renderedFormula = useMemo(() => {
		return (
			<MathJax.Formula formula={formula}/>
		);
	}, [formula]);

	useEffect(() => {
		const timer = setTimeout(() => {
			refreshEquation();
		}, timeout);

		return () => clearTimeout(timer);
	}, [refreshEquation, variable]);

	return (
		<StyledDiv>
			{renderedFormula}
		</StyledDiv>
	)
});

export default RotationMathJax
