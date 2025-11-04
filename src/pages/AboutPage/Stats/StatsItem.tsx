interface Props {
  caption: string;
  value: number;
}

export default function StatsItem(props: Props) {
  const { caption, value } = props;

  return (
    <div>
      <p className="pb-[23px] text-[64px] leading-[100%] text-center text-gray-600">
        {value}
      </p>

      <p className="font-normal text-base leading-normal tracking-[0.5px] text-center text-gray-700">
        {caption}
      </p>
    </div>
  );
}
