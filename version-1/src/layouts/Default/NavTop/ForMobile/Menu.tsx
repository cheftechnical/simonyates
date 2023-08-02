import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../../styling/Color';
import MyContainer from '../../../../styling/MyContainer';
import {Box, Container, IconButton, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import ClearIcon from '@material-ui/icons/Clear';
import rem from '../../../../styling/rem';
import MenuItem from './MenuItem';

interface Props {
	onClose: () => void;
	selected?: string;
	visible: boolean;
}

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(48 / 8),
		// paddingLeft: themeMui.spacing(24 / 8),
		// paddingRight: themeMui.spacing(12 / 8), // visually 24, because the button consumes 12 px
		position: 'fixed',
		backgroundColor: color.grey['900'],

		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		zIndex: 100,
	},

	container: {
		paddingRight: rem(22 - 12) // container.paddingLeft (22) - closeButton.paddingRight (12)
	},

	iconButton: {
		color: color.grey['100']
	},

	menuItems: {
		paddingTop: theme.spacing((44 - 24 - 12) / 8),
		textAlign: 'right'
	}
}));

export default function Menu(props: Props) {
	const classes = useStyles();
	const {onClose, selected, visible} = props;

	const handleClose = React.useCallback(() => {
		onClose();
	}, [onClose]);

	if (!visible) {
		return (<React.Fragment/>);
	}

	return (
		<div className={classes.root}>
			<Container className={classes.container}>
				<Box display="flex" justifyContent="flex-end">
					{/* Left align */}
					<Box flexGrow={1}>
						<Link component={ReactRouterDom} to="/"><Logo
							brand="simon-yates"
							variant="grey-100"
							width={149}
						/></Link>
					</Box>

					{/*	Right align */}
					<Box>
						<IconButton aria-label="close" className={classes.iconButton} onClick={handleClose}>
							<ClearIcon/>
						</IconButton>
					</Box>
				</Box>
			</Container>
			<MyContainer>
				<div className={classes.menuItems}>
					<MenuItem href="/work" selected={selected === 'work'} title="Work"/>
					<MenuItem href={"/featured"} selected={selected === 'featured'} title="Featured"/>
					<MenuItem href={"/about"} selected={selected === 'about'} title="About"/>
					<MenuItem href={"/contact"} selected={selected === 'contact'} title="Contact"/>
				</div>
			</MyContainer>
		</div>
	);
};