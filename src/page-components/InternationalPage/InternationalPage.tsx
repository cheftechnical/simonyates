'use client';

import { useState } from "react";
import MyContainer from "../../components/MyContainer/MyContainer";
import CurrencyConversions from "./CurrencyConversions";
import TemperatureConversions from "./TemperatureConversions";
import TimeConversions from "./TimeConversions";

export default function International() {
  const [ratesStatus, setRatesStatus] = useState<
    "loading" | "live" | "fallback"
  >("loading");
  const [ratesUpdatedOn, setRatesUpdatedOn] = useState<string | null>(null);

  return (
    <MyContainer>
      <div>
        <TimeConversions />
      </div>
      <div className="">
        <CurrencyConversions
          onRatesStatusChange={setRatesStatus}
          onRatesUpdatedOnChange={setRatesUpdatedOn}
        />
      </div>
      <div className="">
        <TemperatureConversions />
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-500">
          Rates from Frankfurter (ECB).{" "}
          {ratesStatus === "live" && ratesUpdatedOn
            ? `Updated ${ratesUpdatedOn}.`
            : ratesStatus === "fallback"
              ? "Using fallback rates."
              : "Updating…"}
        </p>
      </div>
    </MyContainer>
  );
}
