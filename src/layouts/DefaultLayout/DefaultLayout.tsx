import { ReactNode } from "react";
import { styled } from "@mui/material";
import { ScrollRestoration } from "react-router-dom";
import rem from "../../styling/rem";
import NavTop from "./NavTop";
import Footer from "./Footer";
import SkipNav from "./SkipNav";

/**
 * When the layout is in `fullScreen` mode, the content needs to be offset to compensate for the visual weight of the
 * header logo and nav bar.
 *
 * By increasing this number, you will shift the content down by that amount. Conversely, a smaller number will make the
 * content sit higher on the viewport.
 */
const fullHeightOpticalOffset = -32 - 8 - 8 - 1;
const mainId = "main-content";

interface Props {
  /**
   * Child components
   */
  children: ReactNode;

  /**
   * If `true`, layout will use the full height of the viewport
   */
  fullHeight?: boolean;

  /**
   * This key identifies top-nav item is selected
   */
  top?: string;
}

const StyledDivRoot = styled("div")(() => ({
  height: "100%",
}));

const StyledMain = styled("main")(({ theme }) => ({
  // marginTop: themeMui.spacing(162 / 8),
  paddingTop: theme.spacing(162 / 8),

  // color: 'red !important',
}));

const StyledMainFullHeight = styled(StyledMain)(() => ({
  marginTop: rem(fullHeightOpticalOffset),
  height: "100%",
  // color: 'green !important'
}));

const StyledFooter = styled("footer")(({ theme }) => ({
  marginTop: theme.spacing(88 / 8),
}));

const StyledFooterFullHeight = styled(StyledFooter)(() => ({
  marginTop: rem(0 - fullHeightOpticalOffset), // remove the margin so that the footer fits nicely out of frame
}));

export default function DefaultLayout(props: Props) {
  const { children, fullHeight, top } = props;

  const [MyMain, MyFooter] = fullHeight
    ? [StyledMainFullHeight, StyledFooterFullHeight]
    : [StyledMain, StyledFooter];

  return (
    <>
      <StyledDivRoot>
        <SkipNav mainId={mainId} />

        <header>
          <NavTop selected={top} />
        </header>

        {/*/!* IMPORTANT: use `tabIndex=-1` when using the <SkipNav/> component *!/*/}
        <MyMain id={mainId} tabIndex={-1}>
          {children}
        </MyMain>

        <MyFooter>
          <Footer />
        </MyFooter>
      </StyledDivRoot>

      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
}
