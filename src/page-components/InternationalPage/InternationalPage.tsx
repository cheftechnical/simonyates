import MyContainer from "../../styling/MyContainer/MyContainer";
import CurrencyConversions from "./CurrencyConversions";
import TemperatureConversions from "./TemperatureConversions";
import TimeConversions from "./TimeConversions";

export default function International() {
  return (
    <MyContainer>
      <div>
        <TimeConversions />
      </div>
      <div className="">
        <CurrencyConversions />
      </div>
      <div className="">
        <TemperatureConversions />
      </div>
    </MyContainer>
  );
}
