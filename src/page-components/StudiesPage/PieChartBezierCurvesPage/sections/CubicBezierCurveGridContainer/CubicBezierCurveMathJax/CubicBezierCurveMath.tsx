import color from "../../../libs/Color";
import { degToRad } from "../../../libs/trig";
import { MathJaxFormula } from "mathjax3-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

const timeout = 1000;

interface Props {
	endAngle: number;
	radius: number;
	startAngle: number;
	variable?: 'S' | 'E' | 'C1' | 'C2';
}

const d = (value: number): string => {
	return (Math.round(value * 10000) / 10000).toString();
}

// export default function BezierArcMathJax(props: Props) {
export const BezierArcMathJax = memo(function(props: Props) {
	// const classes = useStyles();
	const {endAngle, radius, startAngle, variable} = props;

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
		const red500 = color.red["500"];

		// Convert hex to normalized RGB format for MathJax (avoids # character issue)
		const blueRgb = hexToRgbNormalized(blue500);
		const redRgb = hexToRgbNormalized(red500);

		const angleDelta = startAngle - endAngle;
		const varPhi = degToRad(angleDelta);
		const fourThirds = 4 / 3;
		const varPhiDiv4 = varPhi / 4;
		const tanVarPhiDiv4 = Math.tan(varPhi / 4);
		const f = fourThirds * tanVarPhiDiv4;
		const fTimesRadius = f * radius;
		const cosVarPhi = Math.cos(varPhi);
		const cosVarPhiTimesRadius = cosVarPhi * radius;
		const sinVarPhi = Math.sin(varPhi);
		const sinVarPhiTimesRadius = sinVarPhi * radius;
		const fSinVarPhi = f * sinVarPhi;
		const fCosVarPhi = f * cosVarPhi;

		const cosVarPhiPlusFSinVarPhi = cosVarPhi + fSinVarPhi;
		const cosVarPhiPlusFSinVarPhiTimesRadius = cosVarPhiPlusFSinVarPhi * radius;
		const sinVarPhiMinusFCosVarPhi = sinVarPhi - fCosVarPhi;
		const sinVarPhiMinusFCosVarPhiTimesRadius = sinVarPhiMinusFCosVarPhi * radius;

		const formula = (() => {
			switch (variable) {
				case 'S':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						S & = \textcolor[rgb]{${blueRgb}}{r} \begin{bmatrix}
								  1 \\
								  0 \\
							  \end{bmatrix} \\
						\\
						  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
								  1 \\
								  0 \\
							  \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
								  \textcolor[rgb]{${blueRgb}}{${d(radius)}} \\
								  0 \\
							  \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				case 'E':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						E & = \textcolor[rgb]{${blueRgb}}{r} \begin{bmatrix}
								  cos(\varphi) \\
								  sin(\varphi) \\
							  \end{bmatrix} \\
						\\
						  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
								  ${d(cosVarPhi)} \\
								  ${d(sinVarPhi)} \\
							  \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
								  ${d(cosVarPhiTimesRadius)} \\
								  ${d(sinVarPhiTimesRadius)} \\
							  \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				case 'C1':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						C_{1} & = \textcolor[rgb]{${blueRgb}}{r} \begin{bmatrix}
									  1 \\
									  f \\
								  \end{bmatrix} \\
						\\
							  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
									  1 \\
									  ${d(f)} \\
								  \end{bmatrix} \\
						\\
							  & = \begin{bmatrix}
									 \textcolor[rgb]{${blueRgb}}{${d(radius)}} \\
									 ${d(fTimesRadius)} \\
								  \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				case 'C2':
					return String.raw`$$
						\begin{equation}
						\begin{split}
						C_{2} & = \textcolor[rgb]{${blueRgb}}{r} \begin{bmatrix}
									  cos(\varphi) + f sin(\varphi) \\
									  sin(\varphi) - f cos(\varphi) \\
								  \end{bmatrix} \\
						\\
							  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
									  cos(${d(varPhi)}) + f sin(${d(varPhi)}) \\
									  sin(${d(varPhi)}) - f cos(${d(varPhi)}) \\
								  \end{bmatrix} \\
						\\
							  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
									 ${d(cosVarPhi)} + f (${d(sinVarPhi)}) \\
									 ${d(sinVarPhi)} - f (${d(cosVarPhi)}) \\
								  \end{bmatrix} \\
						\\      
							  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
									 ${d(cosVarPhi)} + ${d(f)} \times ${d(sinVarPhi)} \\
									 ${d(sinVarPhi)} - ${d(f)} \times ${d(cosVarPhi)} \\
								  \end{bmatrix} \\
						\\
							  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
									 ${d(cosVarPhi)} + ${d(fSinVarPhi)} \\
									 ${d(sinVarPhi)} - ${d(fCosVarPhi)} \\
								  \end{bmatrix} \\
						\\
							  & = \textcolor[rgb]{${blueRgb}}{${d(radius)}} \begin{bmatrix}
									 ${d(cosVarPhiPlusFSinVarPhi)} \\
									 ${d(sinVarPhiMinusFCosVarPhi)} \\
								  \end{bmatrix} \\
						\\
							  & = \begin{bmatrix}
									 ${d(cosVarPhiPlusFSinVarPhiTimesRadius)} \\
									 ${d(sinVarPhiMinusFCosVarPhiTimesRadius)} \\
								  \end{bmatrix}
						\end{split}
						\end{equation}
					$$`;
				default:
					return String.raw`$$
						\begin{equation}
						\begin{split}
						\textcolor[rgb]{${blueRgb}}{r} & = \textcolor[rgb]{${blueRgb}}{${d(radius)}}, 
						\measuredangle_0 = ${d(startAngle)}^\circ, 
						\textcolor[rgb]{${redRgb}}{\measuredangle_1} = \textcolor[rgb]{${redRgb}}{${d(endAngle)}}^\circ \\
						\\
						\varphi & = (\measuredangle_0 - \textcolor[rgb]{${redRgb}}{\measuredangle_1}) \times (\pi / 180) \\
								& = (${d(startAngle)} - \textcolor[rgb]{${redRgb}}{${d(endAngle)}}) \times (\pi / 180) \\
								& = ${d(angleDelta)} \times (\pi / 180) \\
								& = ${d(varPhi)} \\
						\\
						f & = (\frac{4}{3}) tan(\frac{\varphi}{4}) \\
						\\
						  & = (\frac{4}{3}) tan(\frac{${d(varPhi)}}{4}) \\
						\\
						  & = (${d(fourThirds)}) tan(${d(varPhiDiv4)}) \\
						\\
						  & = ${d(fourThirds)} \times ${d(tanVarPhiDiv4)} \\
						\\
						  & = ${d(f)} \\
						\end{split}
						\end{equation}
					$$`;
			}
		})();

		setFormula(formula);

	}, [endAngle, radius, startAngle, variable]);

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
	}, [refreshEquation, endAngle, radius, startAngle, variable])

	return (
		<div className="text-gray-900">
			{renderedFormula}
		</div>
	)
});

export default BezierArcMathJax;
