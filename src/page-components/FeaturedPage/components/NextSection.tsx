import Section from "../../../components/Section/Section";
import { ReactNode } from "react";

interface Props {
  /**
   * An id that uniquely identifies the section on the page.
   */
  id: string;
  /**
   * The content of the section.
   */
  children?: ReactNode;
}

export default function NextSection(props: Props) {
  const { children, id } = props;

  return (
    <div className="mt-[68px]">
      <Section id={id}>{children}</Section>
    </div>
  );
}

