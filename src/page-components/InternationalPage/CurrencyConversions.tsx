'use client';

import { ChangeEvent, useEffect, useMemo, useState } from "react";

interface Currency {
  code: string;
  symbol: string;
}

const currencies: Currency[] = [
  {
    code: "USD",
    symbol: "$",
  },
  {
    code: "CAD",
    symbol: "$",
  },
  {
    code: "GBP",
    symbol: "£",
  },
  {
    code: "EUR",
    symbol: "€",
  },
];

export default function CurrencyConversions() {
  const [value, setValue] = useState<string[]>(["0", "0", "0", "0"]);
  const [rates, setRates] = useState<Record<string, number>>({
    USD: 1.0,
    CAD: 1.25,
    GBP: 0.73,
    EUR: 0.84,
  });
  const [ratesUpdatedOn, setRatesUpdatedOn] = useState<string | null>(null);

  const currencyCodes = useMemo(() => currencies.map((c) => c.code), []);

  useEffect(() => {
    let cancelled = false;

    async function loadRates() {
      try {
        const to = currencyCodes.filter((c) => c !== "USD").join(",");
        const res = await fetch(
          `https://api.frankfurter.app/latest?from=USD&to=${encodeURIComponent(to)}`,
          { cache: "no-store" },
        );

        if (!res.ok) return;

        const data: unknown = await res.json();
        if (
          !data ||
          typeof data !== "object" ||
          !("rates" in data) ||
          typeof (data as any).rates !== "object"
        ) {
          return;
        }

        const apiRates = (data as any).rates as Record<string, number>;
        const nextRates: Record<string, number> = { USD: 1.0 };

        for (const code of currencyCodes) {
          if (code === "USD") continue;
          const r = apiRates[code];
          if (typeof r === "number" && Number.isFinite(r)) {
            nextRates[code] = r;
          }
        }

        if (!cancelled) {
          setRates((prev) => ({ ...prev, ...nextRates }));
          setRatesUpdatedOn(
            typeof (data as any).date === "string" ? (data as any).date : null,
          );
        }
      } catch {
        // Swallow errors; keep fallback hard-coded rates.
      }
    }

    void loadRates();

    return () => {
      cancelled = true;
    };
  }, [currencyCodes]);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    valueIndex: number,
  ) => {
    const thisCurrency = currencies[valueIndex];
    const thisRate = rates[thisCurrency.code] ?? 1.0;
    const thisValue = parseFloat(event.target.value);

    setValue((prevState) => {
      return prevState.map((_current, index) => {
        const thatCurrency = currencies[index];
        const thatRate = rates[thatCurrency.code] ?? 1.0;

        if (index === valueIndex) {
          return event.target.value;
        } else {
          return ((thisValue / thisRate) * thatRate)
            .toFixed(2)
            .toString();
        }
      });
    });
  };

  return (
    <div className="flex flex-wrap">
      {currencies.map((currency: Currency, index: number) => (
        <div key={index} className="px-3 w-1/2 py-3">
          <div className="w-full">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
                {currency.symbol}
              </span>
              <input
                id={`currency-${currency.code}`}
                name={`currency-${currency.code}`}
                onChange={(event) => handleChange(event, index)}
                value={value[index]}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent pl-8 pr-16"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                {currency.code}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-600">
              USD.{currency.code} = {(rates[currency.code] ?? 0).toFixed(4)}
            </p>
          </div>
        </div>
      ))}

      <div className="px-3 w-full">
        <p className="text-xs text-gray-500">
          Rates from Frankfurter (ECB).{" "}
          {ratesUpdatedOn ? `Updated ${ratesUpdatedOn}.` : "Updating…"}
        </p>
      </div>
    </div>
  );
}
