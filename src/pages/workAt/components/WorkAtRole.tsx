interface Props {
  children: any;
}

export default function WorkAtRole(props: Props) {
  const { children } = props;

  return (
    <p className="font-primary font-normal text-base leading-normal text-gray-500 tracking-[0.5px] mt-4">
      {children}
    </p>
  );
}
