import { MathJaxFormula } from "mathjax3-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import color from "../../../../../styling/Color";
import { degToRad } from "../../../libs/trig";
import { CubicBezier } from "../../../libs/CubicBezier";

const timeout = 1000;

interface Props {
	cubicBezier: CubicBezier;
	theta: number;
	variable?: 'S' | 'C1' | 'C2' | 'E';
}

// @todo make this common (currently duplicate with Bezier Arc)
const d = (value: number): string => {
	return (Math.round(value * 10000) / 10000).toString();
}

// Format a subtraction expression, handling negative values properly
const formatSubtraction = (a: number, b: number): string => {
	const aStr = d(a);
	const bStr = d(Math.abs(b));
	if (b < 0) {
		return `${aStr} + ${bStr}`;
	}
	return `${aStr} - ${bStr}`;
}

// Format an addition expression, handling negative values properly
const formatAddition = (a: number, b: number): string => {
	const aStr = d(a);
	const bStr = d(Math.abs(b));
	if (b < 0) {
		return `${aStr} - ${bStr}`;
	}
	return `${aStr} + ${bStr}`;
}

// Format a subtraction expression with multiplication, handling negative values properly
// e.g., "x × cos(θ) - y × sin(θ)" where y might be negative
const formatSubtractionWithMult = (x: number, y: number, cosPart: string, sinPart: string): string => {
	const xStr = d(x);
	const yStr = d(Math.abs(y));
	if (y < 0) {
		return `${xStr} \\times ${cosPart} + ${yStr} ${sinPart}`;
	}
	return `${xStr} \\times ${cosPart} - ${yStr} ${sinPart}`;
}

// Format an addition expression with multiplication, handling negative values properly
// e.g., "x × sin(θ) + y × cos(θ)" where y might be negative
const formatAdditionWithMult = (x: number, y: number, sinPart: string, cosPart: string): string => {
	const xStr = d(x);
	const yStr = d(Math.abs(y));
	if (y < 0) {
		return `${xStr} \\times ${sinPart} - ${yStr} ${cosPart}`;
	}
	return `${xStr} \\times ${sinPart} + ${yStr} ${cosPart}`;
}

// export default function RotationMathJax(props: Props) {
export const RotationMathJax = memo(function (props: Props) {
	const {cubicBezier, theta, variable} = props;

  const [formula, setFormula] = useState<string>("");

	// Convert hex color to normalized RGB (0-1) for MathJax compatibility
	const hexToRgbNormalized = (hex: string): string => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (!result) return "0,0,0";
		const r = (parseInt(result[1], 16) / 255).toFixed(3);
		const g = (parseInt(result[2], 16) / 255).toFixed(3);
		const b = (parseInt(result[3], 16) / 255).toFixed(3);
		return `${r},${g},${b}`;
	};

	const refreshEquation = useCallback(() => {
		const blue500 = color.blue["500"];

		// Convert hex to normalized RGB format for MathJax (avoids # character issue)
		const blueRgb = hexToRgbNormalized(blue500);
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

		const formula = ((): string => {
			switch (variable) {
				case 'S':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						S & = \begin{bmatrix}
						          x cos(\textcolor[rgb]{${blueRgb}}{\theta}) - y sin(\textcolor[rgb]{${blueRgb}}{\theta}) \\
						          x sin(\textcolor[rgb]{${blueRgb}}{\theta}) + y cos(\textcolor[rgb]{${blueRgb}}{\theta})
						      \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${formatSubtractionWithMult(cubicBezier.s.x, cubicBezier.s.y, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)} \\
						          ${formatAdditionWithMult(cubicBezier.s.x, cubicBezier.s.y, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(cubicBezier.s.x * cosTheta, cubicBezier.s.y * sinTheta)} \\
					              ${formatAddition(cubicBezier.s.x * sinTheta, cubicBezier.s.y * cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(sXTimesCosTheta, sYTimesSinTheta)} \\
					              ${formatAddition(sXTimesSinTheta, sYTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(sX)} \\
					             ${d(sY)}
					          \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				case 'C1':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						C_1 & = \begin{bmatrix}
						            x cos(\textcolor[rgb]{${blueRgb}}{\theta}) - y sin(\textcolor[rgb]{${blueRgb}}{\theta}) \\
						            x sin(\textcolor[rgb]{${blueRgb}}{\theta}) + y cos(\textcolor[rgb]{${blueRgb}}{\theta})
						        \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${formatSubtractionWithMult(cubicBezier.c1.x, cubicBezier.c1.y, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)} \\
						          ${formatAdditionWithMult(cubicBezier.c1.x, cubicBezier.c1.y, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(cubicBezier.c1.x * cosTheta, cubicBezier.c1.y * sinTheta)} \\
					              ${formatAddition(cubicBezier.c1.x * sinTheta, cubicBezier.c1.y * cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(c1XTimesCosTheta, c1YTimesSinTheta)} \\
					              ${formatAddition(c1XTimesSinTheta, c1YTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(c1X)} \\
					             ${d(c1Y)}
					          \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				case 'C2':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						C_2 & = \begin{bmatrix}
						            x cos(\textcolor[rgb]{${blueRgb}}{\theta}) - y sin(\textcolor[rgb]{${blueRgb}}{\theta}) \\
						            x sin(\textcolor[rgb]{${blueRgb}}{\theta}) + y cos(\textcolor[rgb]{${blueRgb}}{\theta})
						         \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${formatSubtractionWithMult(cubicBezier.c2.x, cubicBezier.c2.y, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)} \\
						          ${formatAdditionWithMult(cubicBezier.c2.x, cubicBezier.c2.y, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(cubicBezier.c2.x * cosTheta, cubicBezier.c2.y * sinTheta)} \\
					              ${formatAddition(cubicBezier.c2.x * sinTheta, cubicBezier.c2.y * cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(c2XTimesCosTheta, c2YTimesSinTheta)} \\
					              ${formatAddition(c2XTimesSinTheta, c2YTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(c2X)} \\
					             ${d(c2Y)}
					          \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				case 'E':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						E & = \begin{bmatrix}
						          x cos(\textcolor[rgb]{${blueRgb}}{\theta}) - y sin(\textcolor[rgb]{${blueRgb}}{\theta}) \\
						          x sin(\textcolor[rgb]{${blueRgb}}{\theta}) + y cos(\textcolor[rgb]{${blueRgb}}{\theta})
						      \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
						          ${formatSubtractionWithMult(cubicBezier.e.x, cubicBezier.e.y, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)} \\
						          ${formatAdditionWithMult(cubicBezier.e.x, cubicBezier.e.y, `sin(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`, `cos(\\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})`)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(cubicBezier.e.x * cosTheta, cubicBezier.e.y * sinTheta)} \\
					              ${formatAddition(cubicBezier.e.x * sinTheta, cubicBezier.e.y * cosTheta)} \\
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					              ${formatSubtraction(eXTimesCosTheta, eYTimesSinTheta)} \\
					              ${formatAddition(eXTimesSinTheta, eYTimesCosTheta)}
					          \end{bmatrix} \\
					    \\
					      & = \begin{bmatrix}
					             ${d(eX)} \\
					             ${d(eY)}
					          \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				default:
					return String.raw`$$
						\begin{equation}
						\begin{split}
						\textcolor[rgb]{${blueRgb}}{\theta} & = \textcolor[rgb]{${blueRgb}}{${theta}}^\circ \\
						\\
						S & = (${cubicBezier.s.x}, ${cubicBezier.s.y}) \\
						\\
						C_1 & = (${cubicBezier.c1.x}, ${cubicBezier.c1.y}) \\
						\\
						C_2 & = (${cubicBezier.c2.x}, ${cubicBezier.c2.y}) \\
						\\
						E & = (${cubicBezier.e.x}, ${cubicBezier.e.y})
						\end{split}
						\end{equation}
					$$`;
			}
		})();

		setFormula(formula);

	}, [cubicBezier, theta, variable]);

	const renderedFormula = useMemo(() => {
		return (
      <MathJaxFormula formula={formula} />
		);
	}, [formula]);

	useEffect(() => {
		const timer = setTimeout(() => {
			refreshEquation();
		}, timeout);

		return () => clearTimeout(timer);
	}, [refreshEquation, variable]);

	return (
		<div className="text-gray-900">
			{renderedFormula}
		</div>
	)
});

export default RotationMathJax
