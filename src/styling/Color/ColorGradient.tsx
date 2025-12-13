type ColorStyle = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

interface Props {
  name: string;
  style: ColorStyle;
}

interface ColorGradientProps {
  hex: string;
  name: string;
}

function ColorGradientBar(colorGradientProps: ColorGradientProps) {
  const { hex, name } = colorGradientProps;

  if (!hex) {
    return (
      <div className="flex">
        <div className="basis-9/12">
          {name}
        </div>
        <div className="basis-3/12">
          &ndash;
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div className="basis-9/12" style={{ backgroundColor: hex }}>
        {name}
      </div>
      <div className="basis-3/12">
        {hex}
      </div>
    </div>
  );
}

export default function ColorGradient(props: Props) {
  const { name, style } = props;

  return (
    <div>
      <div className="flex">
        <div className="basis-9/12" style={{ backgroundColor: style["500"] }}>
          {name}
          <br />
          500*
        </div>
      </div>
      <div className="w-full">
        {Object.entries(style).map((item, index) => (
          <ColorGradientBar hex={item[1]} key={index} name={item[0]} />
        ))}
      </div>
    </div>
  );
}
