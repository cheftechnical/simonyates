import * as React from 'react';
// import {Link} from "@material-ui/core";

interface Props {
    id?: string;
    className?: any;
    name: string;
}

export default function NavRightItem(props: Props) {
    const {className, id, name} = props;

    return (
        <li className={className}><a href={`#${id}`}>{name}</a></li>
    );
};
