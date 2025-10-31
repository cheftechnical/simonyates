interface Props {
  employer: string;
}

export default function WorkAtEmployer(props: Props) {
  const { employer } = props;

  return (
    <h1 className="font-primary font-normal text-2xl leading-8 text-[#626262]">
      {employer}
    </h1>
  );
}
