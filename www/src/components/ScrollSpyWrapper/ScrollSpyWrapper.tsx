import {SectionItem} from "../Sections/SectionItem";
// import {Scrollspy} from "@makotot/ghostui";
// import {useMemo, useRef} from "react";

export interface Props {
  sectionItems: SectionItem[];
}

export default function ScrollSpyWrapper(_props: Props) {
  // const {sectionItems} = props;

  // const sectionRefs = sectionItems.map(() => {
  //   return useRef<HTMLDivElement>(null);
  // });

  return (
    // <Scrollspy sectionRefs={sectionRefs} offset={headerHeight * -1}>
    //   {({currentElementIndexInViewport}) => (
        <div>
          [ScrollSpyWrapper]
        </div>
    //   )}
    // </Scrollspy>
  )
}