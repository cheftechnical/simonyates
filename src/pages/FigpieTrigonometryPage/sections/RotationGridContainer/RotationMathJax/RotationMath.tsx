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
						          ${d(cubicBezier.s.x)} \times cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) - ${d(cubicBezier.s.y)} sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) \\
						          ${d(cubicBezier.s.x)} \times sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) + ${d(cubicBezier.s.y)} cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})
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
						          ${d(cubicBezier.c1.x)} \times cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) - ${d(cubicBezier.c1.y)} sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) \\
						          ${d(cubicBezier.c1.x)} \times sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) + ${d(cubicBezier.c1.y)} cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})
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
						          ${d(cubicBezier.c2.x)} \times cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) - ${d(cubicBezier.c2.y)} sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) \\
						          ${d(cubicBezier.c2.x)} \times sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) + ${d(cubicBezier.c2.y)} cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})
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
						          ${d(cubicBezier.e.x)} \times cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) - ${d(cubicBezier.e.y)} sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) \\
						          ${d(cubicBezier.e.x)} \times sin(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}}) + ${d(cubicBezier.e.y)} cos(\textcolor[rgb]{${blueRgb}}{${d(thetaRad)}})
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
