import * as React from 'react';

interface Props {
    name: string;
    when: string;
}

export default function WorkAtProject(props: Props) {
    const {name, when} = props;

    return (
        <div>{name}, {when}</div>
    );
};
