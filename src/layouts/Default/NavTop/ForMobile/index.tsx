import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MyContainer from '../../../../styling/MyContainer';
import {Box, IconButton, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';
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
		// border: '1px solid magenta',
		width: '100%',
		top: 0,
		zIndex: 999
	}
}));

export default function ForMobile(props: Props) {
	const classes = useStyles();
	const {selected} = props;

	const [isMenuVisible, setIsMenuVisible] = React.useState(false);

	const handleHideMenu = React.useCallback(() => {
		setIsMenuVisible(false);
	}, []);

	const handleShowMenu = React.useCallback(() =>{
		setIsMenuVisible(true);
	}, []);


	return (
		<div className={classes.root}>
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

					{/*	Right align */}
					<Box>
						<IconButton aria-label="menu" onClick={handleShowMenu}>
							<MenuIcon/>
						</IconButton>
					</Box>
				</Box>
			</MyContainer>

			<Menu
				onClose={handleHideMenu}
				selected={selected}
				visible={isMenuVisible}
			/>
		</div>
	);
};
