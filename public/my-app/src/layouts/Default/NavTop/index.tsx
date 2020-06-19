import * as React from 'react';
import Logo from './Logo';
import {Box} from '@material-ui/core';
import Item from './Item';

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
			<Box><Item href="/work" selected={selected === 'work'} title="Work"/></Box>
			<Box><Item href="/featured" selected={selected === 'featured'} title="Featured"/></Box>
			<Box><Item href="/about" selected={selected === 'about'} title="About"/></Box>
			<Box><Item href="/contact" selected={selected === 'contact'} title="Contact"/></Box>
		</Box>
	);
};
