import ConditionalIndent from "../../../components/ConditionalIndent/ConditionalIndent";

interface Props {
  children?: any;
}

export default function FeaturedProjects(props: Props) {
  const { children } = props;

  return <ConditionalIndent>{children}</ConditionalIndent>;
}

