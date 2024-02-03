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

  const refreshEquation = useCallback(() => {
    const theta = degToRad(inputDegrees);
    const x2 = Math.cos(theta);
    const y2 = Math.sin(theta) * yAxisDirection;

    const red500 = color.red["500"];
    const blue500 = color.blue["500"];

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
