interface Props {
  when: string;
  where: string;
}

export default function WorkAtWhenWhere(props: Props) {
  const { when, where } = props;

  return (
    <p className="font-primary font-normal text-base leading-normal tracking-[0.5px] mb-8 text-[#626262]">
      {when} &bull; {where}
    </p>
  );
}
