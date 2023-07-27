// import {Grid, Link} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../components/Logo';
import {color} from '../../../styling/Color/Color';
import Typography from '../../../styling/Typography/Typography';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import rem from '../../../styling/rem';
import {Grid, Link, styled} from "@mui/material";

// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		paddingTop: themeMui.spacing(32 / 8),
// 		paddingBottom: themeMui.spacing(24 / 8),
// 		backgroundColor: color.grey['900']
// 	},
// 	gridItemLogo: {
// 		padding: 0,
// 	},
// 	gridItemLeft: {
// 		paddingTop: themeMui.spacing(16/8),
// 	},
// 	gridItemRight: {
// 		textAlign: 'right'
// 	},
// 	typography: {
// 		color: color.grey['400']
// 	},
// 	socialIcon: {
// 		marginLeft: rem(24),
// 	},
// }));

const StyledGridItemLeft = styled(Grid)(({theme}) => ({
	paddingTop: theme.spacing(16/8),
}))

const StyledDivRoot = styled('div')(({theme}) => ({
	paddingTop: theme.spacing(32 / 8),
	paddingBottom: theme.spacing(24 / 8),
	backgroundColor: color.grey['900']
}));

const StyledGridItemLogo = styled(Grid)(({theme}) => ({
	padding: 0,
}));

const StyledGridItemRight = styled(Grid)(({theme}) => ({
	textAlign: 'right'
}));

const StyledReactRouterDomLink = styled(ReactRouterDom)(({theme}) => ({
	color: color.grey['400']
}));

const StyledLinkSocialIcon = styled(Link)(({theme}) => ({
	marginLeft: rem(24),
}))

const StyledTypography = styled(Typography)(({theme}) => ({
	color: color.grey['400']
}))

export default function Footer() {
	// const classes = useStyles();

	return (
		<StyledDivRoot aria-label="Site Directory" role="navigation">
			<MyContainer>
				<Grid container spacing={0}>
					<StyledGridItemLogo item xs={12}>
						<Link component={ReactRouterDom} to="/"><Logo
							brand="simon-yates" variant="grey-100" width={128}
						/></Link>
					</StyledGridItemLogo>
				</Grid>

				<Grid container spacing={0}>
					<StyledGridItemLeft item xs={6}>
						<StyledTypography variant="caption" group="secondary" weight="regular">
							&copy; 2021 Sybaris Analytics Corporation<br/>
						</StyledTypography>
						<StyledTypography variant="caption" group="secondary" weight="regular">
							{/* @todo mui5 */}
							<StyledReactRouterDomLink to="/legal">Legal</StyledReactRouterDomLink>
						</StyledTypography>
					</StyledGridItemLeft>
					<StyledGridItemRight item xs={6}>
						<StyledLinkSocialIcon
							rel="noopener"
							title="Find me on LinkedIn"
							target="_blank"
							href="https://www.linkedin.com/in/simonyates/"
						><Logo brand="linkedin" variant="grey-300" width={24}/></StyledLinkSocialIcon>

						<StyledLinkSocialIcon
							rel="noopener"
							title="Follow me on Twitter"
							target="_blank"
							href="https://twitter.com/cheftechnical"
						><Logo brand="twitter" variant="grey-300" width={24}/></StyledLinkSocialIcon>
					</StyledGridItemRight>
				</Grid>
			</MyContainer>
		</StyledDivRoot>
	);
};
