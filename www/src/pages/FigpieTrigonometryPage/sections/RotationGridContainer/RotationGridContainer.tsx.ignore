// import * as React from 'react';
import {memo, useState} from 'react';
import MyGridContainer from '../../../../styling/MyGridContainer/MyGridContainer';
// import {Grid} from '@material-ui/core';
import RotationVisualization from './RotationVisualization/RotationVisualization';
import {CubicBezier} from '../../libs/CubicBezier';
import {MyTextField2} from '../../../../styling/MyTextField2/MyTextField2';
import {RotationMathJax} from './RotationMathJax/RotationMath';
import {Grid} from "@mui/material";

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

export const RotationGridContainer = memo(function () {

  // const [cubicBezier, setCubicBezier] = React.useState<CubicBezier>(defaultCubicBezier);
  const [theta, setTheta] = useState<number>(0);

  const handleRotationVisualizationChange = ((newTheta: number) => {
    setTheta(newTheta);
  });

  const handleThetaChange = ((event: any) => {
    setTheta(event.target.value);
  });

  return (
    <div>
      <MyGridContainer>
        <Grid item xs={6}>
          {/*<RotationVisualization onChange={handleRotationVisualizationChange}/>*/}
        </Grid>
        <Grid item xs={6}>
          {/*<MyTextField2*/}
          {/*  label="Theta"*/}
          {/*  name="theta"*/}
          {/*  onChange={handleThetaChange}*/}
          {/*  type="number"*/}
          {/*  value={theta.toString()}*/}
          {/*/>*/}

          <RotationMathJax
            cubicBezier={defaultCubicBezier}
            theta={theta}
          />
        </Grid>
      </MyGridContainer>

      <MyGridContainer>
        <Grid item xs={6}>
          <RotationMathJax
            cubicBezier={defaultCubicBezier}
            theta={theta}
            variable="S"
          />
        </Grid>
        <Grid item xs={6}>
          <RotationMathJax
            cubicBezier={defaultCubicBezier}
            theta={theta}
            variable="C1"
          />
        </Grid>
        <Grid item xs={6}>
          <RotationMathJax
            cubicBezier={defaultCubicBezier}
            theta={theta}
            variable="C2"
          />
        </Grid>
        <Grid item xs={6}>
          <RotationMathJax
            cubicBezier={defaultCubicBezier}
            theta={theta}
            variable="E"
          />
        </Grid>
      </MyGridContainer>
    </div>
  );
});

export default RotationGridContainer;
