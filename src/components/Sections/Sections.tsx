import { ReactNode } from "react";

export type SectionsProps = {
  children: ReactNode;
};

export function Sections(props: SectionsProps) {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
}

export default Sections;