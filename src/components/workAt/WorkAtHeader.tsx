import * as React from 'react';

interface Props {
    employer: string;
    role: string;
    when: string;
    where: string;
}

export default function WorkAtHeader(props: Props) {
    const {employer, role, when, where} = props;

    return (
        <div>
            <div>{employer}</div>
            <div>{role}</div>
            <div>{when} &bull; {where}</div>
        </div>
    );
};

