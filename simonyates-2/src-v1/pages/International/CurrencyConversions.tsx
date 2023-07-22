import {ChangeEvent, useState} from 'react';
import {FormControl, FormHelperText, Grid, Input, InputAdornment} from '@material-ui/core';
import MyGridContainer from '../../styling/MyGridContainer';

interface Currency {
  code: string;
  exchangeRate: number;
  symbol: string;
}

const currencies: Currency[] = [
  {
    code: 'USD',
    exchangeRate: 1.0,
    symbol: '$',
  },
  {
    code: 'CAD',
    exchangeRate: 1.25,
    symbol: '$',
  },
  {
    code: 'GBP',
    exchangeRate: 0.73,
    symbol: '£',
  },
  {
    code: 'EUR',
    exchangeRate: 0.84,
    symbol: '€',
  }
];

export default function CurrencyConversions() {
  const [value, setValue] = useState<string[]>(['0', '0', '0', '0',]);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, valueIndex: number) => {
    const thisRate = currencies[valueIndex].exchangeRate;
    const thisValue = parseFloat(event.target.value);

    setValue(prevState => {
      return prevState.map((current, index) => {
        if (index === valueIndex) {
          return event.target.value;
        } else {
          return ((thisValue / thisRate) * currencies[index].exchangeRate).toFixed(2).toString();
        }
      });
    });
  };

  return (
    <MyGridContainer>
      {currencies.map((currency: Currency, index: number) => (
        <Grid item key={index} xs={6}>
          <FormControl fullWidth>
            {/*<InputLabel htmlFor={`currency-${currency.code}`}>Amount</InputLabel>*/}
            <Input
              id={`currency-${currency.code}`}
              name={`currency-${currency.code}`}
              onChange={(event) => handleChange(event, index)}
              startAdornment={<InputAdornment position="start">{currency.symbol}</InputAdornment>}
              endAdornment={<InputAdornment position="start">{currency.code}</InputAdornment>}
              value={value[index]}
            />
            <FormHelperText>USD.{currency.code} = {currency.exchangeRate}</FormHelperText>
          </FormControl>
        </Grid>
      ))}
    </MyGridContainer>
  )
}