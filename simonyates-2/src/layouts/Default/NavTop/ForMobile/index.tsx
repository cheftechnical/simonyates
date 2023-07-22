import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MyContainer from '../../../../styling/MyContainer';
import {Box, IconButton, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';
import {color} from '../../../../styling/Color/Color';
import Typography from '../../../../styling/Typography/Typography';
import rem from '../../../../styling/rem';
import CenterVertically from '../../../../components/CenterVertically/CenterVertically';

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
	},
	selected: {
		paddingRight: theme.spacing((16-12) / 8),
		fontWeight: 'bold',
		fontSize: rem(14),
		lineHeight: rem(16),
		letterSpacing: rem(1.25),
		textTransform: 'uppercase',
	},
	box1: {
		// backgroundColor: 'magenta'
	},
	box2: {
		// backgroundColor: 'cyan'
	},
	box3: {
		// backgroundColor: 'lime'
	}
}));

export default function ForMobile(props: Props) {
	const classes = useStyles();
	const {selected} = props;

	const [isMenuVisible, setIsMenuVisible] = React.useState(false);

	const handleHideMenu = React.useCallback(() => {
		setIsMenuVisible(false);
	}, []);

	const handleShowMenu = React.useCallback(() => {
		setIsMenuVisible(true);
	}, []);


	return (
		<div className={classes.root}>
			<MyContainer>
				<Box display="flex" justifyContent="flex-end">
					{/* Left align */}
					<Box flexGrow={1} className={classes.box1}>
						<CenterVertically>
							<Link component={ReactRouterDom} to="/"><Logo
								brand="simon-yates"
								variant="default"
								width={149}
							/></Link>
						</CenterVertically>
					</Box>

					{/*	Right align */}
					<Box className={classes.box2}>
						<CenterVertically>
							<Typography className={classes.selected} group="primary" variant="body" weight="regular">
								{selected}
							</Typography>
						</CenterVertically>
					</Box>
					<Box className={classes.box3}>
						<CenterVertically>
							<IconButton aria-label="menu" onClick={handleShowMenu}>
								<MenuIcon/>
							</IconButton>
						</CenterVertically>
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
