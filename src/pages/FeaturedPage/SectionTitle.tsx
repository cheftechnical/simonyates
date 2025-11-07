import { ReactNode } from "react";

interface Props {
  /**
   * The section title text.
   */
  children?: ReactNode;
}

export default function SectionTitle(props: Props) {
  const { children } = props;

  // mb-6 = 16 px (child font size)  * 1.5 (1x row separaration for related content) = 24 px
  // between each appearance, 48 px or (2x 24 px) for separation of similar but distinct items
  return (
    <h2 className="font-normal text-2xl leading-relaxed tracking-[0.25px] mb-6">
      {children}
    </h2>
  );
}
