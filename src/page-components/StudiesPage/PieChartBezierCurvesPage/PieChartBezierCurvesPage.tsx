'use client';

import Container from "@/components/Container/Container";
import MathJaxProviderWrapper from "./MathJaxProviderWrapper";
import { CircleBasicsGridContainer } from "./sections/CircleBasicsGridContainer/CircleBasicsGridContainer";
import { BezierArcGridContainer } from "./sections/CubicBezierCurveGridContainer/CubicBezierCurveGridContainer";
import RotationGridContainer from "./sections/RotationGridContainer";

export default function PieChartBezierCurvesPage() {
  return (
    <MathJaxProviderWrapper>
      <Container>
        <h1 className="font-primary font-normal text-4xl leading-relaxed">
          A Mathematical Construction of Pie Charts Using Cubic B&eacute;zier&nbsp;Curves
        </h1>

        <h2 className="font-primary font-normal text-2xl leading-relaxed mt-[4.0rem]">
          Circle Primitives
        </h2>
        <CircleBasicsGridContainer />

        <h2 className="font-primary font-normal text-2xl leading-relaxed mt-[4.0rem]">
          Cubic B&eacute;zier Construction
        </h2>
        <BezierArcGridContainer />

        <h2 className="font-primary font-normal text-2xl leading-relaxed mt-[4.0rem]">
          Rotation and Composition
        </h2>
        <RotationGridContainer />
      </Container>
    </MathJaxProviderWrapper>
  );
}
