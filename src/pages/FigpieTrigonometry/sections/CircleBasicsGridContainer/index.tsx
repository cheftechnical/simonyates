import * as React from 'react';
import SinCos from './CircleBasicsVisualization';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MyGridContainer from '../../../../styling/MyGridContainer';
import {color} from '../../../../styling/Color';
import {AxisDirection} from './AxisDirection';
import {CircleBasicsMathJax} from './CircleBasicsMathJax';
import {MyTextField2} from '../../../../styling/MyTextField2';

// https://github.com/asnunes/mathjax3-react <-- vastuly superior

const useStyles = makeStyles(() => ({
  root: {
    color: color.grey['900'],
  },
}));

const defaultYAxisDirection: AxisDirection = -1;

export const CircleBasicsGridContainer = React.memo(function () {
  const classes = useStyles();

  const [yAxisDirection, setYAxisDirection] = React.useState(defaultYAxisDirection);
  const [inputDegrees, setInputDegrees] = React.useState<number>(0);

  const handleInputDegreesChange = ((event: any) => {
    setInputDegrees(event.target.value);
  });

  const handleSinCosChange = ((angleDegrees: number) => {
    setInputDegrees(angleDegrees);
  });

  return (
    <MyGridContainer>
      <Grid item xs={6}>
        <SinCos
          onChange={handleSinCosChange}
          value={inputDegrees}
          yAxisDirection={yAxisDirection}
        />
        {/*{yAxisDirection}*/}
      </Grid>
      <Grid item xs={6}>
        <MyTextField2
          label="Input Degrees"
          name="degrees"
          onChange={handleInputDegreesChange}
          type="number"
          value={inputDegrees.toString()}
        />
        <div className={classes.root}>
          <CircleBasicsMathJax
            inputDegrees={inputDegrees}
            yAxisDirection={yAxisDirection}
          />
        </div>
      </Grid>
    </MyGridContainer>
  );
});
