interface Props {
  children: any;
}

export default function WorkAtRole(props: Props) {
  const { children } = props;

  return (
    <p className="font-primary font-medium text-base leading-6 tracking-[0.5px] mb-1">
      {children}
    </p>
  );
}
