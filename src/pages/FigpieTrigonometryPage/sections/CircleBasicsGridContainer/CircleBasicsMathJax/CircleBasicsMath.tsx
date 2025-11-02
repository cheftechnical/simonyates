import { MathJaxFormula } from "mathjax3-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { AxisDirection } from "../AxisDirection";
import color from "../../../../../styling/Color";
import { degToRad } from "../../../libs/trig";

const timeout = 1000;

interface Props {
  inputDegrees: number;
  yAxisDirection: AxisDirection;
}

export const CircleBasicsMathJax = memo(function(props: Props) {
  const { inputDegrees, yAxisDirection } = props;

  const [formula, setFormula] = useState<string>('');

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
    const theta = degToRad(inputDegrees);
    const x2 = Math.cos(theta);
    const y2 = Math.sin(theta) * yAxisDirection;

    const red500 = color.red["500"];
    const blue500 = color.blue["500"];

    // Convert hex to normalized RGB format for MathJax (avoids # character issue)
    const blueRgb = hexToRgbNormalized(blue500);
    const redRgb = hexToRgbNormalized(red500);

    const formula = String.raw`$$					
			\begin{equation}
			\begin{split}
			\textcolor[rgb]{${blueRgb}}{angle} & = ${inputDegrees}^\circ \\
			\\
			\textcolor[rgb]{${redRgb}}{\theta} & = \textcolor[rgb]{${blueRgb}}{angle} * (\pi / 180) \\
				   & = \textcolor[rgb]{${blueRgb}}{${inputDegrees}} * (\pi / 180) \\
				   & = ${theta.toFixed(3)} \\
			\\
			x_1 & = 0 \\
			\\
			y_1 & = 0 \\
			\\
			x_2 & = cos(\textcolor[rgb]{${redRgb}}{\theta}) \\ 
				& = cos(\textcolor[rgb]{${redRgb}}{${theta.toFixed(3)}}) \\
				& = ${x2.toFixed(3)} \\
			\\    
			y_2 & = sin(\textcolor[rgb]{${redRgb}}{\theta}) \\ 
				& = sin(\textcolor[rgb]{${redRgb}}{${theta.toFixed(3)}}) \\
				& = ${y2.toFixed(3)} \\
			\end{split}
			\end{equation}
		$$`;

    setFormula(formula);
  }, [inputDegrees, yAxisDirection]);

  const renderedFormula = useMemo(() => {
    // const formulaValue: string = "$$\int x^2dx$$" //  formula || "";

    return (
      <MathJaxFormula formula={formula} />
    );


    // return (
    //   <MathJaxFormula formula="$$\int x^2dx$$"/>
    // )
  }, [formula]);

  useEffect(() => {
    const timer = setTimeout(() => {
      refreshEquation();
    }, timeout);

    return () => clearTimeout(timer);
  }, [refreshEquation, inputDegrees, yAxisDirection]);


  return (
    <div style={{ color: color.grey["900"] }}>
      {renderedFormula}
    </div>
  );
});

export default CircleBasicsMathJax;
