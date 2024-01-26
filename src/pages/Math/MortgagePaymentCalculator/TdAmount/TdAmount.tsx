import {useMemo} from "react";

export enum Format {
  Default,
  Financial,
  Integer,
  Percent,
}

export interface Props {
  fixed?: number;
  format?: Format;
  value: number;
}

export function TdAmount(props: Props) {
  const {fixed = 2, format, value} = props;

  const formattedValue: string = useMemo(() => {
    switch (format) {
      case Format.Integer:
        return value.toFixed(0)
      case Format.Percent:
        return `${(value * 100).toFixed(fixed)}%`;
      case Format.Financial:
      case Format.Default:
      default:
        return value.toString();
    }
  }, [format, value]);

  return (
    <td align="right">{formattedValue}</td>
  )
}

export default TdAmount;
