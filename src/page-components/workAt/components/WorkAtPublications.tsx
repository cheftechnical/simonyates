import ConditionalIndent from "./ConditionalIndent/ConditionalIndent";

interface Props {
  children?: any;
  next?: boolean;
}

export default function WorkAtPublications(props: Props) {
  const { children, next } = props;

  return (
    <div className={next ? "pt-10" : ""}>
      <ConditionalIndent>{children}</ConditionalIndent>
    </div>
  );
}
