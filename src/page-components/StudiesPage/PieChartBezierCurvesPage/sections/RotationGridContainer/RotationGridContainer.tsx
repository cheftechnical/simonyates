import { MyGridItem } from "../../components/MyGridItem";
import { MyTextField2 } from "@/styling/MyTextField2/MyTextField2";
import { CubicBezier } from "../../libs/CubicBezier";
import RotationMathJax from "./RotationMathJax";
import RotationVisualization from "./RotationVisualization/RotationVisualization";
import { ChangeEvent, memo, useState } from "react";

const defaultCubicBezier: CubicBezier = {
  s: {
    x: 186,
    y: 0
  },
  c1: {
    x: 100,
    y: 25.5
  },
  c2: {
    x: 186.5,
    y: 101.8
  },
  e: {
    x: 0.9,
    y: 186.0
  }
};

export const RotationGridContainer = memo(function() {

  // const [cubicBezier, setCubicBezier] = React.useState<CubicBezier>(defaultCubicBezier);
  const [theta, setTheta] = useState<number>(0);
  const [rotatedCubicBezier, setRotatedCubicBezier] = useState<CubicBezier>(defaultCubicBezier);

  const handleRotationVisualizationChange = ((newTheta: number, newRotatedCubicBezier: CubicBezier) => {
    setTheta(newTheta);
    setRotatedCubicBezier(newRotatedCubicBezier);
  });

  const handleThetaChange = ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTheta(parseFloat((event.target as HTMLInputElement).value));
  });

  return (
    <div>
      <div className="flex flex-wrap">
        <MyGridItem xs={6}>
          <RotationVisualization onChange={handleRotationVisualizationChange} />
        </MyGridItem>
        <MyGridItem xs={6}>
          <MyTextField2
            label="Theta"
            name="theta"
            onChange={handleThetaChange}
            type="number"
            value={theta.toString()}
          />

          <RotationMathJax
            cubicBezier={rotatedCubicBezier}
            theta={theta}
          />
        </MyGridItem>
      </div>

      <div className="flex flex-wrap">
        <MyGridItem xs={6}>
          <RotationMathJax
            cubicBezier={rotatedCubicBezier}
            theta={theta}
            variable="S"
          />
        </MyGridItem>
        <MyGridItem xs={6}>
          <RotationMathJax
            cubicBezier={rotatedCubicBezier}
            theta={theta}
            variable="C1"
          />
        </MyGridItem>
        <MyGridItem xs={6}>
          <RotationMathJax
            cubicBezier={rotatedCubicBezier}
            theta={theta}
            variable="C2"
          />
        </MyGridItem>
        <MyGridItem xs={6}>
          <RotationMathJax
            cubicBezier={rotatedCubicBezier}
            theta={theta}
            variable="E"
          />
        </MyGridItem>
      </div>
    </div>
  );
});

export default RotationGridContainer;
