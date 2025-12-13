import { ChangeEvent, ReactNode, useState } from "react";

interface Temperature {
  code: string;
  convert: (x: number) => number;
  convertFormula: ReactNode;
  symbol: string;
}

const temperatures: Temperature[] = [
  {
    code: "F",
    convert: (c) => {
      return (c * 9) / 5 + 32;
    },
    convertFormula: <>f = (c * 9 / 5) + 32</>,
    symbol: "° F",
  },
  {
    code: "C",
    convert: (f) => {
      return ((f - 32) * 5) / 9;
    },
    convertFormula: <>c = (f - 32) * 5 / 9</>,
    symbol: "° C",
  },
];

export default function TemperatureConversions() {
  const [values, setValues] = useState<string[]>(["0", "0"]);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    valueIndex: number,
  ) => {
    const thisValue = parseFloat(event.target.value);

    setValues((prevState) => {
      return prevState.map((_current: string, index: number) => {
        if (index === valueIndex) {
          return event.target.value;
        } else {
          return temperatures[index].convert(thisValue).toFixed(1).toString();
        }
      });
    });
  };

  return (
    <div className="flex flex-wrap">
      {temperatures.map((temperature: Temperature, index: number) => (
        <div key={index} className="px-3 w-1/2">
          <div className="w-full">
            <div className="relative">
              <input
                id={`temperature-${temperature.code}`}
                name={`temperature-${temperature.code}`}
                onChange={(event) => handleChange(event, index)}
                value={values[index]}
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                {temperature.symbol}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-600">{temperature.convertFormula}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
