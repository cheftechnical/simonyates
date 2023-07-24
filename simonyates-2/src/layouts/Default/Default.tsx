import {ReactNode} from 'react';
import {Helmet} from 'react-helmet-async';
import rem from '../../styling/rem';
import NavTop from './NavTop/NavTop';
import Footer from './Footer/Footer';
import SkipNav from './SkipNav/SkipNav';
import {styled} from "@mui/material";

/**
 * When the layout is in `fullScreen` mode, the content needs to be offset to compensate for the visual weight of the
 * header logo and nav bar.
 *
 * By increasing this number, you will shift the content down by that amount. Conversely, a smaller number will make the
 * content sit higher on the viewport.
 */
const fullHeightOpticalOffset = -32 - 8 - 8 - 1;
const mainId = 'main-content';

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
   * The title of the page as it appears in the <head><title></head>
   */
  title?: string;
  /**
   * This key identifies top-nav item is selected
   */
  top?: string;
}

const StyledDivRoot = styled('div')(({theme}) => ({
  height: '100%'
}));

const StyledMain = styled('main')(({theme}) => ({
  // marginTop: theme.spacing(162 / 8),
  paddingTop: theme.spacing(162 / 8),
}));

const StyledMainFullHeight = styled(StyledMain)(({theme}) => ({
  marginTop: rem(fullHeightOpticalOffset),
  height: '100%',
}));

const StyledFooter = styled('footer')(({theme}) => ({
  marginTop: theme.spacing(88 / 8),
}));

const StyledFooterFullHeight = styled(StyledFooter)(({theme}) => ({
  marginTop: rem(0 - fullHeightOpticalOffset), // remove the margin so that the footer fits nicely out of frame
}));

export default function DefaultLayout(props: Props) {
  // const classes = useStyles();
  const {children, fullHeight, title, top} = props;

  const [MyMain, MyFooter] = fullHeight
    ? [StyledMainFullHeight, StyledFooterFullHeight]
    : [StyledMain, StyledFooter];

  return (
    <StyledDivRoot>
      <Helmet defaultTitle="Simon Yates" titleTemplate="Simon Yates &bull; %s">
        <title>{title}</title>
      </Helmet>

      <SkipNav mainId={mainId}/>

      <header>
        <NavTop selected={top}/>
      </header>

      {/*/!* IMPORTANT: use `tabIndex=-1` when using the <SkipNav/> component *!/*/}
      <MyMain id={mainId} tabIndex={-1}>
        {children}
      </MyMain>

      <MyFooter>
        <Footer/>
      </MyFooter>
    </StyledDivRoot>
  );
};
