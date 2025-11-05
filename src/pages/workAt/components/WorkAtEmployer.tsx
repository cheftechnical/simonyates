interface Props {
  employer: string;
}

export default function WorkAtEmployer(props: Props) {
  const { employer } = props;

  return (
    <h1 className="font-primary font-normal text-[2.0rem] leading-normal text-gray-900">
      {employer}
    </h1>
  );
}
