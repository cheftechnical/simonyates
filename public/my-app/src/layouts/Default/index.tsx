import React from 'react';
import NavTop from "../../components/NavTop";

interface Props {
    children: any;
    selectedNavTop?: string;
}

export default function DefaultLayout(props: Props) {
    const {children, selectedNavTop} = props;

    return (
        <div>
            <NavTop selected={selectedNavTop}/>
            {children}
        </div>
    );
}