import React from 'react';
import Logo from "./Logo";
import {Box} from "@material-ui/core";
import Item from "./Item";

interface Props {
    selected?: string;
}

export default function NavTop(props: Props) {
    const {selected} = props;

    return (
        <Box display="flex" justifyContent="flex-end">
            {/* Left align */}
            <Box flexGrow={1}><Logo/></Box>

            {/* Right align */}
            <Box><Item selected={selected === 'work'} title="Work"/></Box>
            <Box><Item selected={selected === 'featured'} title="Featured"/></Box>
            <Box><Item selected={selected === 'about'} title="About"/></Box>
            <Box><Item selected={selected === 'contact'} title="Contact"/></Box>
        </Box>
    );
};
