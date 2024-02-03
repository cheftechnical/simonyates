interface Props {
  children?: any;
}

export default function WorkAtEvents(props: Props) {
  const { children } = props;

  return <div>{children}</div>;
}
