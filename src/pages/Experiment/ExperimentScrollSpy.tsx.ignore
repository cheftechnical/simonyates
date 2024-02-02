import {Box} from "@mui/material";
import {useRef} from "react";
import {Scrollspy} from "@makotot/ghostui";
import './experimentScrollSpy.css';

// const headerHeight: string = '100px';
const gutterHeight: number = 25;
const headerHeight: number = 150;

const loremIpsum = (
  <>
    The quick brown fox jumped over the lazy dog<br/><br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus purus ac tortor vulputate, a placerat mi suscipit. Suspendisse eget tellus convallis, imperdiet ex quis, imperdiet purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce non lorem eu urna egestas efficitur in vel odio. Curabitur feugiat nulla convallis imperdiet faucibus. Proin eu finibus arcu, sed convallis turpis. Sed nec dui viverra, cursus est quis, condimentum est. Phasellus eu blandit enim, sit amet egestas justo. Donec quis placerat neque, id suscipit turpis. Fusce sollicitudin dictum quam, eu condimentum mi consequat ac. Morbi scelerisque lobortis ligula ornare porttitor.<br/><br/>
    Quisque aliquam risus non pellentesque dictum. Sed pharetra non tortor id commodo. Aenean id arcu id mauris hendrerit ullamcorper vitae at dui. Etiam commodo nisi odio, sed maximus augue condimentum eu. Phasellus sit amet risus sit amet neque mollis imperdiet vitae ut dolor. Suspendisse tempor in nibh sed sodales. Nullam dolor mi, varius at imperdiet sed, tempus in neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper tempus nisi ac semper. Praesent convallis ultrices orci, sit amet rhoncus purus interdum eu. Phasellus quis leo auctor nisi sagittis aliquam sed non odio. Duis maximus nibh vitae leo pulvinar ornare. Suspendisse malesuada ultricies nibh, eget finibus mauris suscipit sit amet. Nunc nulla nulla, feugiat eget rutrum eget, lacinia condimentum orci.<br/><br/>
    {/*Maecenas dui felis, laoreet et blandit eu, feugiat vitae dui. Nam maximus libero id augue vestibulum tempor. Etiam imperdiet, magna varius auctor fermentum, nibh justo efficitur elit, a imperdiet turpis dui vel ligula. Quisque vel neque erat. Aenean porta metus ac dolor aliquam, eu tincidunt augue tristique. Nunc iaculis mauris eget interdum elementum. Nam id nisl et purus tristique lobortis ac sagittis magna. Sed vel malesuada urna. Aliquam tellus arcu, condimentum ac aliquet id, semper nec erat. Aliquam rhoncus lacus in dui tristique, in vestibulum orci venenatis. Mauris ac auctor turpis, non dignissim nunc. Maecenas accumsan massa a felis lacinia imperdiet. Suspendisse lorem libero, accumsan et bibendum ac, posuere id lectus. Phasellus ullamcorper felis quis posuere sollicitudin. Donec varius lacus at est tempor placerat. Quisque pretium risus nec vulputate auctor.*/}
    {/*Maecenas efficitur leo leo, vitae placerat nibh posuere sed. Nullam sed urna quis massa ornare fringilla vel ac tellus. Vestibulum quis erat et libero interdum porttitor. Integer id libero in ex mollis sodales. Nullam interdum lacus eros, tempus bibendum felis pellentesque vel. Nulla gravida, nulla eget tristique dignissim, justo tellus fringilla leo, ac vehicula felis massa nec libero. Phasellus viverra non purus id scelerisque. Proin consectetur venenatis lacus, sed faucibus leo sollicitudin vitae. Nunc molestie ut dui quis molestie. Donec laoreet vehicula neque, a bibendum dui. Maecenas imperdiet facilisis cursus. Proin nunc ipsum, pretium vel quam vel, pulvinar fermentum leo.<br/><br/>*/}
    {/*Vivamus porta felis eu faucibus blandit. Fusce sed ante at orci laoreet finibus. Mauris sagittis tortor vitae arcu convallis tincidunt. Aenean cursus, odio iaculis sodales scelerisque, nisl ligula lobortis erat, volutpat tempor ipsum justo nec dui. Mauris non posuere felis. Mauris in orci consequat, lacinia ipsum vitae, accumsan odio. Vivamus vel mauris luctus, scelerisque sem vitae, gravida sem. Nullam vitae feugiat neque, sed porta turpis. Maecenas in erat in libero semper commodo. In vel fermentum diam. Nam sit amet ipsum nec libero sodales molestie.<br/><br/>*/}
    {/*Cras vel leo a turpis tincidunt gravida a vitae turpis. Fusce malesuada lacus nisl, sed dictum arcu ullamcorper vitae. Vivamus tincidunt ipsum justo, fermentum tempus lacus eleifend ac. Nulla in ante suscipit, congue leo vel, pretium lorem. In velit nisl, varius eget accumsan eu, ullamcorper sit amet ligula. Etiam venenatis nisi vel posuere interdum. Nulla hendrerit elit ut metus pretium, quis iaculis erat tristique. Etiam in consectetur mauris.<br/><br/>*/}
    {/*Donec sit amet auctor risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac tempus mi. Cras sed mollis tellus, ut mollis nunc. Etiam fringilla luctus purus, et auctor ex blandit a. Proin auctor pharetra libero non malesuada. Sed lacinia posuere justo et maximus. Nam nibh nulla, ornare quis consectetur sed, imperdiet sit amet risus. Donec placerat egestas nulla, a fermentum sem finibus id. Phasellus at odio nibh. Donec ut scelerisque leo, id tempus nulla. Nam sed imperdiet sem.<br/><br/>*/}
    {/*Ut erat nisl, malesuada in ullamcorper nec, rutrum ut neque. Fusce auctor interdum elit, vitae blandit metus aliquam et. Integer ac tincidunt neque. Phasellus varius placerat est quis euismod. Praesent lacus orci, tempus quis ornare sed, imperdiet ac diam. Integer id ipsum laoreet urna gravida laoreet. Morbi et blandit nulla, quis ultrices nunc. Nulla viverra dolor id odio vehicula finibus. Aenean pharetra est non mi lacinia, at vulputate magna porta. Mauris id nunc eu ipsum tincidunt euismod at id felis. Duis euismod pharetra enim.<br/><br/>*/}
    {/*Cras tristique tellus congue, eleifend arcu ac, semper enim. Maecenas lacinia aliquet erat a vestibulum. Donec condimentum iaculis odio in aliquet. Sed at arcu eget nisi bibendum malesuada. Vestibulum ac imperdiet lectus, quis ullamcorper massa. Donec interdum porttitor tristique. Nullam volutpat arcu ut ornare euismod. Suspendisse lacinia consequat tellus. Phasellus feugiat orci a libero venenatis cursus. Pellentesque euismod massa venenatis magna blandit placerat. Aliquam ac ipsum at purus faucibus aliquet in ut nunc. Donec congue ornare purus, id ornare nisi luctus nec. Etiam mattis neque nec lobortis efficitur.<br/><br/>*/}
    Vivamus pharetra ipsum turpis, et eleifend ipsum volutpat in. Donec auctor facilisis mi. Vivamus non lectus vel leo rhoncus porta iaculis a justo. Integer facilisis lectus sit amet mollis mollis. Integer eleifend vehicula faucibus. Vestibulum porta efficitur posuere. Maecenas ut nibh aliquet mauris mollis congue at non urna. Donec posuere justo quis aliquet molestie. Mauris ut faucibus metus. Integer ac est molestie ipsum consequat luctus eget fringilla leo. Morbi vel purus id turpis convallis tempus non quis nibh. Praesent ac tristique neque, nec placerat ex. Proin mauris ipsum, viverra et lectus at, mollis malesuada eros. Sed vitae tortor purus. Quisque tellus lectus, aliquet non ornare nec, ullamcorper at tortor.

  </>
);

export default function ExperimentScrollSpy() {
  const SIZE = 5;
  const list = new Array(SIZE).fill(0);

  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  return (
    <div>
      <Box sx={{
        backgroundColor: 'black',
        opacity: 0.67,

        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 100,

        height: headerHeight,
        width: '100%',
      }}>
        [topNav]
      </Box>

      <Box sx={{
        border: '1px solid magenta',
        // marginTop: headerHeight,
        position: 'relative',
        // top: '0px', // this offsets the side effect of the section-anchor
        //top: headerHeight - gutterHeight, //

        // good
        // top: headerHeight, // this moves everything down to sit below the header, the magenta should be visiable under the nav
        top: headerHeight - gutterHeight
      }}>
        <Scrollspy sectionRefs={sectionRefs} offset={headerHeight * -1}>
          {({currentElementIndexInViewport}) => (
            <div>
              <ul
                data-cy="nav-wrapper"
                style={{
                  border: '1px solid black',

                  listStyle: "none",
                  position: "fixed",
                  top: 150,
                  right: 0,
                  backgroundColor: "#fff",
                  padding: "1rem"
                }}
              >
                {list.map((_, i) => (
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
              <div data-cy="section-wrapper">
                {list.map((_, i) => (
                  <section
                    key={i}
                    ref={sectionRefs[i]}
                    data-cy={`section-item`}
                  >
                    <div
                      // className='section-anchor'
                      id={`section-${i}`}
                      style={{
                        backgroundColor: 'pink',
                        opacity: 0.5,
                        // top: gutterHeight * -1,
                        // top: -150, // this needs to be as last  much as the inverse of the height of the nav to ensure everything ets pushed down to where it needs to be
                        // top: 0 - headerHeight + gutterHeight,
                        position: 'relative',
                        zIndex: -1,
                        height: gutterHeight, // sets the actual gutter
                        top: 0 - headerHeight + gutterHeight, // sets where that is rendered, which is also where the anchor will be
                      }}
                    />
                    <div

                      className={
                        currentElementIndexInViewport === i ? "active" : ""
                      }
                      style={{
                        border: '1px solid blue',
                        // display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // height: "500px",
                        // height: '100vh',
                        // height: 'calc(100vh - 100px)',
                        // backgroundColor: `#${i}${i}${i}`,
                        // color: "#fff",
                        // fontSize: "2rem",
                        // paddingTop: '100px',
                      }}
                    >
                      {i}<br/>
                      {loremIpsum}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </Scrollspy>

        <footer style={{
          backgroundColor: 'silver',
        }}>
          [footer]
        </footer>
      </Box>
    </div>
  )
}
