import {color} from '../../../../styling/Color/Color';
import MyContainer from '../../../../styling/MyContainer/MyContainer';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../../components/Logo';
import rem from '../../../../styling/rem';
import {useCallback} from "react";
import {Box, Container, IconButton, Link, styled} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MenuItems from './MenuItems';

interface Props {
	/**
	 * Callback raised when the user closes the menu
	 */
	onClose: () => void;
	visible: boolean;
}

const StyledContainer = styled(Container)(() => ({
	paddingRight: rem(22 - 12) // container.paddingLeft (22) - closeButton.paddingRight (12)
}));

const StyledDivRoot = styled('div')(({theme}) => ({
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
}));

const StyledIconButton = styled(IconButton)(() => ({
	color: color.grey['100']
}));

export default function Menu(props: Props) {
	const {onClose, visible} = props;

	const handleClose = useCallback(() => {
		onClose();
	}, [onClose]);

	if (!visible) {
		return <></>
	}

	return (
		<StyledDivRoot>
			<StyledContainer>
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
						<StyledIconButton aria-label="close" onClick={handleClose}>
							<ClearIcon/>
						</StyledIconButton>
					</Box>
				</Box>
			</StyledContainer>
			<MyContainer>
				<MenuItems onClick={handleClose}/>
			</MyContainer>
		</StyledDivRoot>
	);
};