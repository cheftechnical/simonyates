import { ChangeEvent, useState } from "react";

interface Currency {
  code: string;
  exchangeRate: number;
  symbol: string;
}

const currencies: Currency[] = [
  {
    code: "USD",
    exchangeRate: 1.0,
    symbol: "$",
  },
  {
    code: "CAD",
    exchangeRate: 1.25,
    symbol: "$",
  },
  {
    code: "GBP",
    exchangeRate: 0.73,
    symbol: "£",
  },
  {
    code: "EUR",
    exchangeRate: 0.84,
    symbol: "€",
  },
];

export default function CurrencyConversions() {
  const [value, setValue] = useState<string[]>(["0", "0", "0", "0"]);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    valueIndex: number,
  ) => {
    const thisRate = currencies[valueIndex].exchangeRate;
    const thisValue = parseFloat(event.target.value);

    setValue((prevState) => {
      return prevState.map((_current, index) => {
        if (index === valueIndex) {
          return event.target.value;
        } else {
          return ((thisValue / thisRate) * currencies[index].exchangeRate)
            .toFixed(2)
            .toString();
        }
      });
    });
  };

  return (
    <div className="flex flex-wrap">
      {currencies.map((currency: Currency, index: number) => (
        <div key={index} className="px-3 w-1/2">
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
              USD.{currency.code} = {currency.exchangeRate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
