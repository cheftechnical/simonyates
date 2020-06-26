import React from 'react';
import NavTop from './NavTop';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
    children: any;
    title?: string;
    top?: string;
}

const useStyles = makeStyles((theme) => ({
    main: {
        // paddingTop: theme.spacing((96 + 40)/8)
    }
}));

export default function DefaultLayout(props: Props) {
    const classes = useStyles();
    const {children, title, top} = props;

    return (
        <div>
            <Helmet defaultTitle="Simon Yates" titleTemplate="Simon Yates &bull; %s">
                <title>{title}</title>
            </Helmet>

            <header>
                <NavTop selected={top}/>
            </header>

            <main className={classes.main}>
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};
