import {makeStyles, Theme} from '@material-ui/core/styles';
import classNames from 'classnames';
import {ReactNode} from 'react';
import {Helmet} from 'react-helmet-async';
import rem from '../../styling/rem';
import NavTop from './NavTop';
import Footer from './Footer';
import SkipNav from './SkipNav';

/**
 * When the layout is in `fullScreen` mode, the content needs to be offset to compensate for the visual weight of the
 * header logo and nav bar.
 *
 * By increasing this number, you will shift the content down by that amount. Conversely, a smaller number will make the
 * content sit higher on the viewport.
 */
const fullHeightOpticalOffset = -32 - 8 - 8 - 1;

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%'
  },
  main: {
    // marginTop: themeMui.spacing(162 / 8),
    paddingTop: theme.spacing(162 / 8),
  },
  fullHeight: {
    marginTop: rem(fullHeightOpticalOffset),
    height: '100%',
  },
  footer: {
    marginTop: theme.spacing(88 / 8),
  },
  footerFullHeight: {
    marginTop: rem(0 - fullHeightOpticalOffset), // remove the margin so that the footer fits nicely out of frame
  },
}));

const mainId = 'main-content';

export default function DefaultLayout(props: Props) {
  const classes = useStyles();
  const {children, fullHeight, title, top} = props;

  const mainClass = classNames(classes.main, {
    [classes.fullHeight]: fullHeight,
  });

  const footerClass = classNames(classes.footer, {
    [classes.footerFullHeight]: fullHeight,
  });

  return (
    <div className={classes.root}>
      <Helmet defaultTitle="Simon Yates" titleTemplate="Simon Yates &bull; %s">
        <title>{title}</title>
      </Helmet>

      <SkipNav mainId={mainId}/>

      <header>
        <NavTop selected={top}/>
      </header>

      {/* IMPORTANT: use `tabIndex=-1` when using the <SkipNav/> component */}
      <main id={mainId} className={mainClass} tabIndex={-1}>
        {children}
      </main>

      <footer className={footerClass}>
        <Footer/>
      </footer>
    </div>
  );
};
