import SinCos from './CircleBasicsVisualization/CircleBasicsVisualization';
// import {Grid} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
// import MyGridContainer from '../../../../styling/MyGridContainer/MyGridContainer';
// import {color} from '../../../../styling/Color/Color';
import {AxisDirection} from './AxisDirection';
// import {CircleBasicsMathJax} from './CircleBasicsMathJax/CircleBasicsMath';
import {memo, useState} from "react";
import MyGridContainer from "../../../../styling/MyGridContainer";
import { Grid } from "@mui/material";
import MyTextField2 from "../../../../styling/MyTextField2";
import CircleBasicsMathJax from "./CircleBasicsMathJax/CircleBasicsMath.tsx";
import color from "../../../../styling/Color";

// https://github.com/asnunes/mathjax3-react <-- vastuly superior

// const useStyles = makeStyles(() => ({
//   root: {
//     color: color.grey['900'],
//   },
// }));

const defaultYAxisDirection: AxisDirection = -1;

export const CircleBasicsGridContainer = memo(function () {
  // const classes = useStyles();

  // const [yAxisDirection, setYAxisDirection] = React.useState(defaultYAxisDirection);
  const [inputDegrees, setInputDegrees] = useState<number>(0);

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
          yAxisDirection={defaultYAxisDirection}
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
        <div style={{color: color.grey["900"]}}>
          <CircleBasicsMathJax
            inputDegrees={inputDegrees}
            yAxisDirection={defaultYAxisDirection}
          />
        </div>
      </Grid>
    </MyGridContainer>
  );
});

export default CircleBasicsGridContainer;
