import React from 'react';
import NavTop from './NavTop';
import Footer from './Footer';
import {Helmet} from 'react-helmet-async';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../styling/rem';
import classNames from 'classnames';

/**
 * When the layout is in `fullScreen` mode, the content needs to be offset to compensate for the visual weight of the
 * header logo and nav bar.
 *
 * By increasing this number, you will shift the content down by that amount. Conversely, a smaller number will make the
 * content sit higher on the viewport.
 */
const fullHeightOpticalOffset = 32;

interface Props {
  children: any;
  fullHeight?: boolean;
  title?: string;
  top?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%'
  },
  main: {
    marginTop: theme.spacing(162 / 8),
    minHeight: `calc(100vh - 244px + 24px)`, // ensure that the main content always occupies at least the viewport
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

      <header>
        <NavTop selected={top}/>
      </header>

      <main className={mainClass}>
        {children}
      </main>

      <footer className={footerClass}>
        <Footer/>
      </footer>
    </div>
  );
};
