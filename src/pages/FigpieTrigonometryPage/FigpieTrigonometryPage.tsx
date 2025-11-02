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
          <h1 className="font-primary font-normal text-[54px] leading-[88px] tracking-[0.5px]">
            How to Build a Pie Chart With Cubic B&eacute;zier&nbsp;Curves
          </h1>

          <h2 className="font-primary font-normal text-[34px] leading-[56px] tracking-[0.25px] mt-[56px]">
            Circle Basics
          </h2>
          <CircleBasicsGridContainer/>

          <h2 className="font-primary font-normal text-[34px] leading-[56px] tracking-[0.25px] mt-[56px]">
            Cubic B&eacute;zier
          </h2>
          <BezierArcGridContainer />

          <h2 className="font-primary font-normal text-[34px] leading-[56px] tracking-[0.25px] mt-[56px]">
            Rotation
          </h2>
          <RotationGridContainer />
        </MyContainer>
      </PageWrapper>
    </MathJaxProviderWrapper>
  );
}
