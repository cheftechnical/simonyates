// import Scrollspy from 'react-scrollspy';
// import {makeStyles} from '@material-ui/core/styles';
import NavRightItem from './NavRightItem/NavRightItem';
import {color} from '../../styling/Color/Color';
import {SectionItem} from '../Sections/SectionItem';
import {styled} from "@mui/material";
import {Scrollspy} from "@makotot/ghostui";
import {useRef} from 'react';

interface Props {
  sections?: SectionItem[];
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

const StyledDivRoot = styled('div')(({theme}) => ({
  position: 'fixed',
  maxWidth: '17%', // no idea why this works, but it does
  border: '1px solid magenta',
}));

export default function NavRight(props: Props) {
  // const classes = useStyles();
  const {sections = []} = props;

  console.log('sections', sections);

  // const items = sections.map(current => {
  //   return current.id;
  // });

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];


  // if (!sections) return <></>;

  // return (
  //   <nav aria-label="Sections">
  //     <StyledDivRoot>
  //       {/*<Scrollspy currentClassName={classes.isCurrent} items={items} style={{listStyleType: 'none'}} offset={-100}>*/}
  //
  //       <Scrollspy sectionRefs={sectionRefs}>
  //         {sections.map((item, index) => (
  //           <div key={index}>
  //             <NavRightItem id={item.id} key={index} name={item.name}/>
  //           </div>
  //         ))}
  //       </Scrollspy>
  //       {/*</Scrollspy>*/}
  //
  //     </StyledDivRoot>
  //   </nav>
  // );


  return (
    <nav aria-label="Sections">
      <StyledDivRoot>
        asfd
        <Scrollspy sectionRefs={sectionRefs}>
          {({currentElementIndexInViewport}) => (
            <div>
              <ul
                data-cy="nav-wrapper"
                style={{
                  listStyle: "none",
                  position: "fixed",
                  top: 0,
                  right: 0,
                  backgroundColor: "#fff",
                  padding: "1rem"
                }}
              >
                {sections.map((_, i) => (
                  <li
                    key={i}
                    className={
                      currentElementIndexInViewport === i ? "active" : ""
                    }
                    data-cy={`nav-item`}
                  >
                    <a
                      href={`#section-${i}`}
                      style={{
                        color:
                          currentElementIndexInViewport === i ? "#f00" : "#222"
                      }}
                    >
                      section-{i}
                    </a>
                  </li>
                ))}
              </ul>
              {/*<div data-cy="section-wrapper">*/}
              {/*  {sections.map((_, i) => (*/}
              {/*    <div*/}
              {/*      id={`section-${i}`}*/}
              {/*      data-cy={`section-item`}*/}
              {/*      key={i}*/}
              {/*      ref={sectionRefs[i]}*/}
              {/*      className={*/}
              {/*        currentElementIndexInViewport === i ? "active" : ""*/}
              {/*      }*/}
              {/*      style={{*/}
              {/*        display: "flex",*/}
              {/*        justifyContent: "center",*/}
              {/*        alignItems: "center",*/}
              {/*        height: "500px",*/}
              {/*        backgroundColor: `#${i}${i}${i}`,*/}
              {/*        color: "#fff",*/}
              {/*        fontSize: "2rem"*/}
              {/*      }}*/}
              {/*    >*/}
              {/*      {i}*/}
              {/*    </div>*/}
              {/*  ))}*/}
              {/*</div>*/}
            </div>
          )}
        </Scrollspy>
      </StyledDivRoot>
    </nav>
  );
};
