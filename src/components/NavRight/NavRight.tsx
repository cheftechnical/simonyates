import "./style.css";
import NavRightItem from "./NavRightItem";
import { Sections } from "../../types/Sections.ts";
import { useEffect, useState } from "react";

interface NavRightProps {
  /**
   * The sections on the page
   */
  sections?: Sections;
}

export function NavRight(props: NavRightProps) {
  const { sections } = props;
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  /**
   * If no sections were provided, we can skip this
   */
  if (!sections) {
    return (
      <div>
        [No Nav Items]
      </div>
    );
  }

  useEffect(() => {
    const sectionIds = Object.values(sections).map((s) => s.id);
    const headerOffset = 100; // matches scroll-padding-top

    const handleScroll = () => {
      // Find the section currently in view
      let currentSectionId: string | null = null;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (accounting for header offset)
          if (rect.top <= headerOffset + 50 && rect.bottom >= headerOffset) {
            currentSectionId = sectionId;
          }
        }
      }

      // If we're near the top, select the first section
      if (currentSectionId === null && window.scrollY < 200) {
        currentSectionId = sectionIds[0] || null;
      }

      // If we're past the last section, select the last section
      if (currentSectionId === null && sectionIds.length > 0) {
        const lastSection = document.getElementById(sectionIds[sectionIds.length - 1]);
        if (lastSection) {
          const rect = lastSection.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            currentSectionId = sectionIds[sectionIds.length - 1];
          }
        }
      }

      setActiveSectionId(currentSectionId);
    };

    // Check on mount and hash change
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, [sections]);

  return (
    <div className="fixed">
      <ul className="list-none p-4">
        {Object.entries(sections).map(([key, value]) => (
          <NavRightItem
            key={key}
            section={value}
            isActive={activeSectionId === value.id}
          />
        ))}
      </ul>
    </div>
  );
}


// @todo mui5
// const useStyles = makeStyles(() => ({
//   root: {
//     position: 'fixed',
//     maxWidth: '17%' // no idea why this works, but it does
//   },
//
//   scrollspy: {
//     listStyleType: 'none'
//   },
//
//   // The Scrollspy component attaches this class to the currently selected item
//   isCurrent: {
//     color: color.grey['900'],
//
//     // borderLeft: `2px solid magenta`
//     borderLeft: `2px solid ${color.grey['500']}`
//   },
// }));

// const StyledDivRoot = styled('div')(({theme}) => ({
//   position: 'fixed',
//   maxWidth: '17%', // no idea why this works, but it does
//   border: '1px solid magenta',
// }));
//
// export function _NavRight(props: NavRightProps) {
//   // const classes = useStyles();
//   const {sections = []} = props;
//
//
//
//   // const items = sections.map(current => {
//   //   return current.id;
//   // });
//
//   const sectionRefs = [
//     useRef<HTMLDivElement>(null),
//     useRef<HTMLDivElement>(null),
//   ];
//
//   if (!sections) return null;
//
//   // return (
//   //   <nav aria-label="Sections">
//   //     <StyledDivRoot>
//   //       {/*<Scrollspy currentClassName={classes.isCurrent} items={items} style={{listStyleType: 'none'}} offset={-100}>*/}
//   //
//   //       <Scrollspy sectionRefs={sectionRefs}>
//   //         {sections.map((item, index) => (
//   //           <div key={index}>
//   //             <NavRightItem id={item.id} key={index} name={item.name}/>
//   //           </div>
//   //         ))}
//   //       </Scrollspy>
//   //       {/*</Scrollspy>*/}
//   //
//   //     </StyledDivRoot>
//   //   </nav>
//   // );
//
//   console.log('sections', sections);
//
//   // return (
//   //   <nav aria-label="Sections">
//   //     <div style={{position: 'fixed', maxWidth: '17%'}}>
//   //       <Scrollspy sectionRefs={sectionRefs}>
//   //         {({currentElementIndexInViewport}) => (
//   //           <div>
//   //             before
//   //             <ul
//   //               data-cy="nav-wrapper"
//   //               style={{
//   //                 listStyle: "none",
//   //                 position: "fixed",
//   //                 top: 0,
//   //                 right: 0,
//   //                 backgroundColor: "#fff",
//   //                 padding: "1rem"
//   //               }}
//   //             >
//   //               {sections.map((_, i) => (
//   //                 <li
//   //                   key={i}
//   //                   className={
//   //                     currentElementIndexInViewport === i ? "active" : ""
//   //                   }
//   //                   data-cy={`nav-item`}
//   //                 >
//   //                   <a
//   //                     href={`#section-${i}`}
//   //                     style={{
//   //                       color:
//   //                         currentElementIndexInViewport === i ? "#f00" : "#222"
//   //                     }}
//   //                   >
//   //                     section-{i}
//   //                   </a>
//   //                 </li>
//   //               ))}
//   //             </ul>
//   //             after
//   //             {/*<div data-cy="section-wrapper">*/}
//   //             {/*  {sections.map((_, i) => (*/}
//   //             {/*    <div*/}
//   //             {/*      id={`section-${i}`}*/}
//   //             {/*      data-cy={`section-item`}*/}
//   //             {/*      key={i}*/}
//   //             {/*      ref={sectionRefs[i]}*/}
//   //             {/*      className={*/}
//   //             {/*        currentElementIndexInViewport === i ? "active" : ""*/}
//   //             {/*      }*/}
//   //             {/*      style={{*/}
//   //             {/*        display: "flex",*/}
//   //             {/*        justifyContent: "center",*/}
//   //             {/*        alignItems: "center",*/}
//   //             {/*        height: "500px",*/}
//   //             {/*        backgroundColor: `#${i}${i}${i}`,*/}
//   //             {/*        color: "#fff",*/}
//   //             {/*        fontSize: "2rem"*/}
//   //             {/*      }}*/}
//   //             {/*    >*/}
//   //             {/*      {i}*/}
//   //             {/*    </div>*/}
//   //             {/*  ))}*/}
//   //             {/*</div>*/}
//   //           </div>
//   //         )}
//   //       </Scrollspy>
//   //     </div>
//   //   </nav>
//   // );
// }

export default NavRight;