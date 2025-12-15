interface Props {
  caption: string;
  value: string;
}

export default function StatsItem(props: Props) {
  const { caption, value } = props;

  return (
    <div className="flex flex-col">
      <div className="h-[120px] flex items-center justify-center">
        <p className="text-4xl leading-[100%] text-center text-gray-600">
          {value}
        </p>
      </div>

      <p className="pt-6 font-normal text-base leading-normal text-center text-gray-700">
        {caption}
      </p>
    </div>
  );
}
