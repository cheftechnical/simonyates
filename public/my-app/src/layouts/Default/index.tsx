import React from 'react';
import NavTop from './NavTop';
import Footer from './Footer';

interface Props {
    children: any;
    top?: string;
}

export default function DefaultLayout(props: Props) {
    const {children, top} = props;

    return (
        <div>
            <NavTop selected={top}/>
            {children}
            <Footer/>
        </div>
    );
}