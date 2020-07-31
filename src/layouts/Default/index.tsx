import React from 'react';
import NavTop from './NavTop';
import Footer from './Footer';
import {Helmet} from 'react-helmet-async';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../styling/rem';

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
        marginTop: theme.spacing(162/8),
        minHeight: '100%'
    },
    fullHeight: {
        marginTop: rem(-48),
        height: '100%'
    }
}));

export default function DefaultLayout(props: Props) {
    const classes = useStyles();
    const {children, fullHeight, title, top} = props;

    const mainClass = (fullHeight)
        ? `${classes.main} ${classes.fullHeight}`
        : classes.main;

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

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};
