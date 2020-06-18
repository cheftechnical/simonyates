import * as React from 'react';

interface Props {
    selected: boolean;
    title: string;
}

export default function Item(props: Props) {
    const {selected, title} = props;

    if (selected) {
        return (
            <div><b>{title}</b></div>
        );
    }

    return (
        <div>{title}</div>
    );
}