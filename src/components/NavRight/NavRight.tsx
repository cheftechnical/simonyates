import "./style.css";
import { CSSProperties } from "@mui/material/styles/createMixins";
import NavRightItem from "./NavRightItem";
import { Sections } from "../../types/Sections.ts";

interface NavRightProps {
  /**
   * The sections on the page
   */
  sections?: Sections;
}

const rootStyle: CSSProperties = {
  position: "fixed"
};

export function NavRight(props: NavRightProps) {
  const { sections } = props;

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

  return (
    <div style={rootStyle}>

      {/*<a onClick={(e) => onPress(e)} href={"#section-1"}>*/}
      {/*  <div*/}
      {/*    style={{ textAlign: "center" }}*/}
      {/*    data-to-scrollspy-id="section-1"*/}
      {/*    className="ss-item-demo-2"*/}
      {/*  >*/}
      {/*    Section 1*/}
      {/*  </div>*/}
      {/*</a>*/}
      {/*<a onClick={(e) => onPress(e)} href={"#section-2"}>*/}
      {/*  <div*/}
      {/*    data-to-scrollspy-id="section-2"*/}
      {/*    className="ss-item-demo-2 text-center"*/}
      {/*  >*/}
      {/*    Section 2*/}
      {/*  </div>*/}
      {/*</a>*/}
      {/*<a onClick={(e) => onPress(e)} href={"#section-3"}>*/}
      {/*  <div*/}
      {/*    data-to-scrollspy-id="section-3"*/}
      {/*    className="ss-item-demo-2 text-center"*/}
      {/*  >*/}
      {/*    Section 3*/}
      {/*  </div>*/}
      {/*</a>*/}

      <ul
        style={{
          listStyle: "none",
          // position: "fixed",
          // top: 0,
          // right: 0,
          // backgroundColor: "#fff",
          padding: "1rem"
        }}
      >

        {Object.entries(sections).map(([key, value]) => (
          <NavRightItem key={key} section={value} />
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