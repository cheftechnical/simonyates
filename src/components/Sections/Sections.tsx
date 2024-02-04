import { ReactNode, useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";

export type SectionsProps = {
  children: ReactNode;
};

export function Sections(props: SectionsProps) {
  const { children } = props;

  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={parentScrollContainerRef}>
      <ScrollSpy activeClass="active-scroll-spy">
        {children}
      </ScrollSpy>
    </div>
  );
}

export default Sections;