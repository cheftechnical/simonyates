'use client';

import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import CurrencyConversions from "./CurrencyConversions";
import TimeConversions from "./TimeConversions";
import TemperatureConversions from "./TemperatureConversions";

export default function International() {
  return (
    <PageWrapper>
      <MyContainer>
        <div>
          <TimeConversions />
        </div>
        <div className="mt-6">
          <CurrencyConversions />
        </div>
        <div className="mt-6">
          <TemperatureConversions />
        </div>
      </MyContainer>
    </PageWrapper>
  );
}
