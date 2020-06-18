import * as React from 'react';

interface Props {
    children: any;
}

export default function WorkAtDescription(props: Props) {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
};
