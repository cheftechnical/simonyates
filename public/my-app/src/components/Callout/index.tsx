import * as React from 'react';

interface Props {
    children: any | any[];
}

export default function Callout(props: Props) {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    );
};
