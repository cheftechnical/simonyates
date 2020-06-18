import React from 'react';
import NavTop from './NavTop';

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
        </div>
    );
}