import * as React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import Typography from '../../styling/Typography/Typography';
import MyMathJaxProvider from './MyMathJaxProvider';
import MyContainer from '../../styling/MyContainer/MyContainer';
import {BezierArcGridContainer} from './sections/CubicBezierCurveGridContainer/CubicBezierCurveGridContainer';
import {RotationGridContainer} from './sections/RotationGridContainer/RotationGridContainer';
import {CircleBasicsGridContainer} from './sections/CircleBasicsGridContainer/CircleBasicsGridContainer';

export default function FigpieTrigonometry() {
  return (
    <MyMathJaxProvider>
      <DefaultLayout title="How it Works" top="figpie">
        <MyContainer>
          <Typography group="primary" variant="h1" weight="regular">
            How to Build a Pie Chart With Cubic B&eacute;zier&nbsp;Curves
          </Typography>

          <Typography next group="primary" variant="h2" weight="regular">
            Circle Basics
          </Typography>
          <CircleBasicsGridContainer/>

          <Typography next group="primary" variant="h2" weight="regular">
            Cubic B&eacute;zier
          </Typography>
          <BezierArcGridContainer/>

          <Typography next group="primary" variant="h2" weight="regular">
            Rotation
          </Typography>
          <RotationGridContainer/>
        </MyContainer>
      </DefaultLayout>
    </MyMathJaxProvider>
  );
}