import * as React from 'react';
import {Box} from "@material-ui/core";

interface Props {
    children: any[] | any;
    employer: string;
    title: string;
    when: string;
}

export default function Experience(props: Props) {
    const {children, employer, title, when} = props;

    return (
        <Box display="flex">
            <Box>[logo]</Box>
            <Box>
                <div>{employer}, {title}, {when}</div>
                {children}
                <div>Read Full Details [arrow]</div>
            </Box>
        </Box>
    );
};
