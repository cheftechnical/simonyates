import * as React from 'react';

interface Props {
    children: any;
}

export default function Highlight(props: Props) {
    const {children} = props;

    return (
        <div>{children}</div>
    );
}