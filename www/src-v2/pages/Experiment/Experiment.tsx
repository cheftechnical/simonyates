import {Box} from "@mui/material";
import {Scrollspy} from "@makotot/ghostui";
import {useRef} from "react";
import './experiment.css';

export default function Experiment() {
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
      {/* Top Nav */}
      <Box sx={{
        backgroundColor: 'black',
        // border: '1px solid magenta',
        opacity: 0.5,

        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 100,

        height: '100px',
        width: '100%',
      }}>
        [topNav]
      </Box>

      <Box sx={{
        // border: '1px solid blue',
        // marginTop: '100px',
        position: 'relative',
        // top: '100px',
      }}>
        <Scrollspy sectionRefs={sectionRefs} offset={-25}>
          {({currentElementIndexInViewport}) => (
            <div>
              <ul
                data-cy="nav-wrapper"
                style={{
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
                    id={`section-${i}`}
                    ref={sectionRefs[i]}
                    data-cy={`section-item`}
                    key={i}
                  >
                    <div

                      className={
                        currentElementIndexInViewport === i ? "active" : ""
                      }
                      style={{
                        // display: "flex",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // height: "500px",
                        // height: '100vh',
                        height: 'calc(100vh - 100px)',
                        // backgroundColor: `#${i}${i}${i}`,
                        color: "#fff",
                        // fontSize: "2rem",
                        // paddingTop: '100px',
                      }}
                    >
                      {i}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          )}
        </Scrollspy>
        <footer>
          [footer]
        </footer>
      </Box>
    </div>
  )
}