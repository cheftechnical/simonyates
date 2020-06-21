import React from 'react';
import NavTop from './NavTop';
import Footer from './Footer';
import {Helmet} from 'react-helmet';

interface Props {
    children: any;
    title?: string;
    top?: string;
}

export default function DefaultLayout(props: Props) {
    const {children, title, top} = props;

    return (
        <div>
            <Helmet defaultTitle="Simon Yates" titleTemplate="Simon Yates &bull; %s">
                <title>{title}</title>
            </Helmet>

            <NavTop selected={top}/>

            {children}

            <Footer/>
        </div>
    );
};
