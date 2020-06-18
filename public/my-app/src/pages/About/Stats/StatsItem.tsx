import * as React from 'react';

interface Props {
    caption: string;
    value: number;
}

export default function StatsItem(props: Props) {
    const {caption, value} = props;

    return (
        <div>
            <div>{value}</div>
            <div>{caption}</div>
        </div>
    );
};
