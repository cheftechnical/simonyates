interface Props {
  when: string;
  where: string;
}

export default function WorkAtWhenWhere(props: Props) {
  const { when, where } = props;

  return (
    <p className="font-primary font-normal text-base leading-normal text-gray-700 tracking-[0.5px] mt-4 ">
      {/* mx-4 = 16 px = 1 em */}
      {when}<span className="mx-4">&bull;</span>{where}
    </p>
  );
}
