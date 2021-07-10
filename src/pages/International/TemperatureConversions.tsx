import {FormControl, FormHelperText, Grid, Input, InputAdornment} from '@material-ui/core';
import {ChangeEvent, ReactNode, useState} from 'react';
import MyGridContainer from '../../styling/MyGridContainer';

interface Temperature {
  code: string;
  convert: (x: number) => number;
  convertFormula: ReactNode;
  symbol: string;
}

const temperatures: Temperature[] = [
  {
    code: 'F',
    convert: (c) => {
      return (c * 9 / 5) + 32;
    },
    convertFormula: <>(c * 9 / 5) + 32</>,
    symbol: '° F'
  },
  {
    code: 'C',
    convert: (f) => {
      return (f - 32) * 5 / 9;
    },
    convertFormula: <>(f - 32) * 5 / 9</>,
    symbol: '° C'
  },
];

export default function TemperatureConversions() {
  const [values, setValues] = useState<string[]>(['0', '0']);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, valueIndex: number) => {
    const thisValue = parseFloat(event.target.value);

    setValues(prevState => {
      return prevState.map((current: string, index: number) => {
        if (index === valueIndex) {
          return event.target.value;
        } else {
          return temperatures[index].convert(thisValue).toString();
        }
      });
    });
  };

  return (
    <MyGridContainer>
      {temperatures.map((temperature: Temperature, index: number) => (
        <Grid item key={index} xs={6}>
          <FormControl fullWidth>
            {/*<InputLabel htmlFor={`temperature-${temperature.code}`}>Temperature</InputLabel>*/}
            <Input
              id={`currency-${temperature.code}`}
              name={`currency-${temperature.code}`}
              onChange={(event) => handleChange(event, index)}
              endAdornment={<InputAdornment position="start">{temperature.symbol}</InputAdornment>}
              value={values[index]}
            />
            <FormHelperText>{temperature.convertFormula}</FormHelperText>
          </FormControl>
        </Grid>
      ))}
    </MyGridContainer>
  );
}