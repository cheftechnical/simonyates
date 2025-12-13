interface Props {
  when: string;
  where: string;
}

export default function WorkAtWhenWhere(props: Props) {
  const { when, where } = props;

  return (
    <p className="font-primary font-normal text-base leading-normal text-gray-700 tracking-[0.5px] mt-4 ">
      {when}&emsp;&bull;&emsp;{where}
    </p>
  );
}
