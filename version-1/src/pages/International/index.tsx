import {Box} from '@material-ui/core';
import DefaultLayout from '../../layouts/Default';
import MyContainer from '../../styling/MyContainer';
import CurrencyConversions from './CurrencyConversions';
import TemperatureConversions from './TemperatureConversions';
import TimeConversions from './TimeConversions';

export default function International() {
  return (
    <DefaultLayout>
      <MyContainer>
        <Box>
          <TimeConversions/>
        </Box>
        <Box mt={6}>
          <CurrencyConversions/>
        </Box>
        <Box mt={6}>
          <TemperatureConversions/>
        </Box>
      </MyContainer>
    </DefaultLayout>
  );
}
