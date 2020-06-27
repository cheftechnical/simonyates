import * as React from 'react';
import Logo from './Logo';
import {Box, Container} from '@material-ui/core';
import Item from './Item';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';

interface Props {
	selected?: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(56/8),
		paddingBottom: theme.spacing(24/8),
		position: 'fixed',
		backgroundColor: color.white,
		border: '1px solid magenta',
		width: '100%',
		top: 0,
		zIndex: 999
	}
}));

export default function NavTop(props: Props) {
	const classes = useStyles();
	const {selected} = props;

	return (
		<div className={classes.root}>
			<Container>
				<Box display="flex" justifyContent="flex-end">
					{/* Left align */}
					<Box flexGrow={1}><Logo/></Box>

					{/* Right align */}
					<Box><Item href="/work" selected={selected === 'work'} title="Work"/></Box>
					<Box><Item href="/featured" selected={selected === 'featured'} title="Featured"/></Box>
					<Box><Item href="/about" selected={selected === 'about'} title="About"/></Box>
					<Box><Item href="/contact" selected={selected === 'contact'} title="Contact"/></Box>
				</Box>
			</Container>
		</div>
	);
};
