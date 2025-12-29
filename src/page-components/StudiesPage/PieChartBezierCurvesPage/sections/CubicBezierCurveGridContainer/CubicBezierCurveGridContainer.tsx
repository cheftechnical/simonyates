import { MyGridItem } from "../../components/MyGridItem";
import { TextField } from "@/components/TextField/TextField";
import BezierArcMathJax from "./CubicBezierCurveMathJax";
import CubicBezierCurveVisualization from "./CubicBezierCurveVisualization/CubicBezierCurveVisualization";
import { ChangeEvent, memo, useState } from "react";

const startAngle = 360;

export const BezierArcGridContainer = memo(function () {
	const [radius, setRadius] = useState<number>(100.0);
	const [endAngle, setEndAngle] = useState<number>(315.0)

	const handleBezierArcVisualizationChange = ((newEndAngle: number, newRadius: number) => {
		setEndAngle(newEndAngle);
		setRadius(newRadius);
	});

  const handleEndAngleChange = ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEndAngle(parseFloat((event.target as HTMLInputElement).value));
	});

  const handleRadiusChange = ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRadius(parseFloat((event.target as HTMLInputElement).value));
	});

	return (
		<div>
			<div className="flex flex-wrap">
				<MyGridItem xs={6}>
          <CubicBezierCurveVisualization
            onChange={handleBezierArcVisualizationChange}
          />
				</MyGridItem>
				<MyGridItem xs={6}>
					<div className="flex flex-wrap">
						<MyGridItem xs={6}>
              <TextField
                disabled
                label="Radius"
                name="radius"
                onChange={handleRadiusChange}
                type="number"
                value={radius.toString()}
              />
						</MyGridItem>
						<MyGridItem xs={6}>
              <TextField
                label="End Angle"
                name="endAngle"
                onChange={handleEndAngleChange}
                type="number"
                value={endAngle.toString()}
              />
						</MyGridItem>
					</div>

					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
					/>
				</MyGridItem>
			</div>
			<div className="flex flex-wrap">
				<MyGridItem xs={2}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="S"
					/>
				</MyGridItem>
				<MyGridItem xs={3}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="C1"
					/>
				</MyGridItem>
				<MyGridItem xs={4}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="C2"
					/>
				</MyGridItem>
				<MyGridItem xs={3}>
					<BezierArcMathJax
						radius={radius}
						startAngle={startAngle}
						endAngle={endAngle}
						variable="E"
					/>
				</MyGridItem>
			</div>
		</div>
	)
});

export default CubicBezierCurveVisualization;
