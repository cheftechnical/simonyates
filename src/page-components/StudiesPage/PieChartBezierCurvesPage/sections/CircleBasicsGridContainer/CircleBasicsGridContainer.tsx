import SinCos from './CircleBasicsVisualization/CircleBasicsVisualization';
// import {Grid} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
// import MyGridContainer from '../../../../styling/MyGridContainer/MyGridContainer';
import color from "../../libs/Color";
import { MyGridItem } from "../../components/MyGridItem";
import TextField from "@/components/TextField";
import {AxisDirection} from './AxisDirection';
import CircleBasicsMathJax from "./CircleBasicsMathJax/CircleBasicsMath";
// import {CircleBasicsMathJax} from './CircleBasicsMathJax/CircleBasicsMath';
import {memo, useState} from "react";

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
    <div className="flex flex-wrap">
      <MyGridItem xs={6}>
        <SinCos
          onChange={handleSinCosChange}
          value={inputDegrees}
          yAxisDirection={defaultYAxisDirection}
        />
        {/*{yAxisDirection}*/}
      </MyGridItem>
      <MyGridItem xs={6}>
        <TextField
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
      </MyGridItem>
    </div>
  );
});

export default CircleBasicsGridContainer;
