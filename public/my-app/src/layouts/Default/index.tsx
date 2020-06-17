import React from 'react';
import NavTop from "../../components/NavTop";

interface Props {
    children: any;
}

export default function DefaultLayout(props: Props) {
    const {children} = props;

    return (
        <div>
            <NavTop/>
            {children}
        </div>
    );
}