import * as React from 'react';
import {Box, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import Item from './Item';
import MyContainer from '../../../../styling/MyContainer';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../../styling/Color';

interface Props {
	selected?: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(48 / 8),
		paddingBottom: theme.spacing(24 / 8),
		position: 'fixed',
		backgroundColor: color.white,
		// border: '1px solid cyan',
		// backgroundColor: 'cyan',
		// opacity: 0.25,
		width: '100%',
		top: 0,
		zIndex: 999
	}
}));

export default function ForDesktop(props: Props) {
	const classes = useStyles();
	const {selected} = props;

	return (
		<div aria-label="Global" className={classes.root} role="navigation">
			<MyContainer>
				<Box display="flex" justifyContent="flex-end">
					{/* Left align */}
					<Box flexGrow={1}>
						<Link component={ReactRouterDom} to="/"><Logo
							brand="simon-yates"
							variant="default"
							width={149}
						/></Link>
					</Box>

					{/* Right align */}
					<Box><Item href="/work" selected={selected === 'work'} title="Work"/></Box>
					<Box><Item href="/featured" selected={selected === 'featured'} title="Featured"/></Box>
					<Box><Item href="/about" selected={selected === 'about'} title="About"/></Box>
					<Box><Item href="/contact" selected={selected === 'contact'} title="Contact"/></Box>
				</Box>
			</MyContainer>
		</div>
	);
};