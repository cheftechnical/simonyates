interface Props {
  children?: any | any[];
  name: string;
  next?: boolean;
  when?: string;
}

export default function WorkAtProject(props: Props) {
  const { children, name, next, when } = props;

  const optionalWhen = when ? <>, {when}</> : <></>;

  return (
    <div className={next ? "mt-14" : ""}>
      <h3 className="font-primary font-semibold text-base leading-normal mb-6 text-[#626262]">
        {name}
        {optionalWhen}
      </h3>
      <div>{children}</div>
    </div>
  );
}
