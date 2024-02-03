import MyContainer from "../../styling/MyContainer/MyContainer";
import CurrencyConversions from "./CurrencyConversions";
import TemperatureConversions from "./TemperatureConversions";
import TimeConversions from "./TimeConversions";
import { Box } from "@mui/material";

export default function International() {
  return (
    // <DefaultLayout>
    <MyContainer>
      <Box>
        <TimeConversions />
      </Box>
      <Box mt={6}>
        <CurrencyConversions />
      </Box>
      <Box mt={6}>
        <TemperatureConversions />
      </Box>
    </MyContainer>
    // </DefaultLayout>
  );
}
