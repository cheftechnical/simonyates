import * as React from 'react';

interface Props {
    children?: any | any[];
    name: string;
    when: string;
}

export default function WorkAtProject(props: Props) {
    const {children, name, when} = props;

    return (
        <div>
            <div>{name}, {when}</div>
            <div>{children}</div>
        </div>
    );
};
