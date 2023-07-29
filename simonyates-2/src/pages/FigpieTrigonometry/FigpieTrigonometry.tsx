import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import MathJaxProviderWrapper from './MathJaxProviderWrapper';
import MyContainer from '../../styling/MyContainer/MyContainer';
import {BezierArcGridContainer} from './sections/CubicBezierCurveGridContainer/CubicBezierCurveGridContainer';
import {RotationGridContainer} from './sections/RotationGridContainer/RotationGridContainer';
import {CircleBasicsGridContainer} from './sections/CircleBasicsGridContainer/CircleBasicsGridContainer';
import {Typography} from "@mui/material";

export default function FigpieTrigonometry() {
  return (
    // <MathJaxProviderWrapper>
      <DefaultLayout title="How it Works" top="figpie">
        <MyContainer>
          <Typography component="h1" variant="primaryH1">
            How to Build a Pie Chart With Cubic B&eacute;zier&nbsp;Curves
          </Typography>

          <Typography component="h2" variant="primaryH2Next">
            Circle Basics
          </Typography>
          {/*<CircleBasicsGridContainer/>*/}

          <Typography component="h2" variant="primaryH2Next">
            Cubic B&eacute;zier
          </Typography>
          {/*<BezierArcGridContainer/>*/}

          <Typography component="h2" variant="primaryH2Next">
            Rotation
          </Typography>
          {/*<RotationGridContainer/>*/}
        </MyContainer>
      </DefaultLayout>
    // </MathJaxProviderWrapper>
  );
}