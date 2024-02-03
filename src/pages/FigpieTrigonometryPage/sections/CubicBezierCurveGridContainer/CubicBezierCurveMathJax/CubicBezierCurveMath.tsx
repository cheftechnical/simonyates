import { styled } from "@mui/material";
import { MathJaxFormula } from "mathjax3-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import color from "../../../../../styling/Color";
import { degToRad } from "../../../libs/trig";

const timeout = 1000;

interface Props {
	endAngle: number;
	radius: number;
	startAngle: number;
	variable?: 'S' | 'E' | 'C1' | 'C2';
}

// @todo mui5
// const useStyles = makeStyles(() => ({
// 	root: {
// 		color: color.grey['900'],
// 	},
// }));
const StyledDiv = styled("div")(() => ({
	color: color.grey['900'],
}))

const d = (value: number): string => {
	return (Math.round(value * 10000) / 10000).toString();
}

// export default function BezierArcMathJax(props: Props) {
export const BezierArcMathJax = memo(function(props: Props) {
	// const classes = useStyles();
	const {endAngle, radius, startAngle, variable} = props;

  const [formula, setFormula] = useState<string>("");

	const refreshEquation = useCallback(() => {

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

		const equation = (() => {
			switch (variable) {
				case 'S':
					return String.raw`
						S & = r \begin{bmatrix}
								  1 \\
								  0 \\
							  \end{bmatrix} \\
						\\
						  & = ${d(radius)} \begin{bmatrix}
								  1 \\
								  0 \\
							  \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
								  ${d(radius)} \\
								  0 \\
							  \end{bmatrix}
					`;
				case 'E':
					return String.raw`
						E & = r \begin{bmatrix}
								  cos(\varphi) \\
								  sin(\varphi) \\
							  \end{bmatrix} \\
						\\
						  & = ${d(radius)} \begin{bmatrix}
								  ${d(cosVarPhi)} \\
								  ${d(sinVarPhi)} \\
							  \end{bmatrix} \\
						\\
						  & = \begin{bmatrix}
								  ${d(cosVarPhiTimesRadius)} \\
								  ${d(sinVarPhiTimesRadius)} \\
							  \end{bmatrix}
					`;
				case 'C1':
					return String.raw`
						C_{1} & = r \begin{bmatrix}
									  1 \\
									  f \\
								  \end{bmatrix} \\
						\\
							  & = ${d(radius)} \begin{bmatrix}
									  1 \\
									  ${d(f)} \\
								  \end{bmatrix} \\
						\\
							  & = \begin{bmatrix}
									 ${d(radius)} \\
									 ${d(fTimesRadius)} \\
								  \end{bmatrix}
					`;
				case 'C2':
					return String.raw`
						C_{2} & = r \begin{bmatrix}
									  cos(\varphi) + f sin(\varphi) \\
									  sin(\varphi) - f cos(\varphi) \\
								  \end{bmatrix} \\
						\\
							  & = ${d(radius)} \begin{bmatrix}
									  cos(${d(varPhi)}) + f sin(${d(varPhi)}) \\
									  sin(${d(varPhi)}) - f cos(${d(varPhi)}) \\
								  \end{bmatrix} \\
						\\
							  & = ${d(radius)} \begin{bmatrix}
									 ${d(cosVarPhi)} + f (${d(sinVarPhi)}) \\
									 ${d(sinVarPhi)} - f (${d(cosVarPhi)}) \\
								  \end{bmatrix} \\
						\\      
							  & = ${d(radius)} \begin{bmatrix}
									 ${d(cosVarPhi)} + ${d(f)} \times ${d(sinVarPhi)} \\
									 ${d(sinVarPhi)} - ${d(f)} \times ${d(cosVarPhi)} \\
								  \end{bmatrix} \\
						\\
							  & = ${d(radius)} \begin{bmatrix}
									 ${d(cosVarPhi)} + ${d(fSinVarPhi)} \\
									 ${d(sinVarPhi)} - ${d(fCosVarPhi)} \\
								  \end{bmatrix} \\
						\\
							  & = ${d(radius)} \begin{bmatrix}
									 ${d(cosVarPhiPlusFSinVarPhi)} \\
									 ${d(sinVarPhiMinusFCosVarPhi)} \\
								  \end{bmatrix} \\
						\\
							  & = \begin{bmatrix}
									 ${d(cosVarPhiPlusFSinVarPhiTimesRadius)} \\
									 ${d(sinVarPhiMinusFCosVarPhiTimesRadius)} \\
								  \end{bmatrix}
					`;
				default:
					return String.raw`
						r & = ${d(radius)}, 
						\measuredangle_0 = ${d(startAngle)}^\circ, 
						\measuredangle_1 = ${d(endAngle)}^\circ \\
						\\
						\varphi & = (\measuredangle_0 - \measuredangle_1) \times (\pi / 180) \\
								& = (${d(startAngle)} - ${d(endAngle)}) \times (\pi / 180) \\
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
		<StyledDiv>
			{renderedFormula}
		</StyledDiv>
	)
});

export default BezierArcMathJax;
