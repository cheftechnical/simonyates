import MathJaxProviderWrapper from "./MathJaxProviderWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import { BezierArcGridContainer } from "./sections/CubicBezierCurveGridContainer/CubicBezierCurveGridContainer";
import RotationGridContainer from "./sections/RotationGridContainer";
import { CircleBasicsGridContainer } from "./sections/CircleBasicsGridContainer/CircleBasicsGridContainer";
import PageWrapper from "../../components/PageWrapper";

export default function FigpieTrigonometryPage() {
  return (
    <MathJaxProviderWrapper>
      <PageWrapper title="How it Works">
        <MyContainer>
          <h1 className="font-primary font-normal text-4xl leading-relaxed tracking-[0.5px]">
            How to Build a Pie Chart With Cubic B&eacute;zier&nbsp;Curves
          </h1>

          <h2 className="font-primary font-normal text-2xl leading-relaxed tracking-[0.25px] mt-[4.0rem]">
            Circle Basics
          </h2>
          <CircleBasicsGridContainer/>

          <h2 className="font-primary font-normal text-2xl leading-relaxed tracking-[0.25px] mt-[4.0rem]">
            Cubic B&eacute;zier
          </h2>
          <BezierArcGridContainer />

          <h2 className="font-primary font-normal text-2xl leading-relaxed tracking-[0.25px] mt-[4.0rem]">
            Rotation
          </h2>
          <RotationGridContainer />
        </MyContainer>
      </PageWrapper>
    </MathJaxProviderWrapper>
  );
}
