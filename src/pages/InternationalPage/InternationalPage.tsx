import { Box } from "@mui/material";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import CurrencyConversions from "./CurrencyConversions";
import TimeConversions from "./TimeConversions";
import TemperatureConversions from "./TemperatureConversions";

export default function International() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
