import {Grid, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../../components/Logo';
import {color} from '../../../styling/Color';
import Typography from '../../../styling/Typography';
import MyContainer from '../../../styling/MyContainer';
import rem from '../../../styling/rem';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(32 / 8),
		paddingBottom: theme.spacing(24 / 8),
		backgroundColor: color.grey['900']
	},
	gridItemLogo: {
		padding: 0,
	},
	gridItemLeft: {
		paddingTop: theme.spacing(16/8),
	},
	gridItemRight: {
		textAlign: 'right'
	},
	typography: {
		color: color.grey['400']
	},
	socialIcon: {
		marginLeft: rem(24),
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div aria-label="Site Directory" className={classes.root} role="navigation">
			<MyContainer>
				<Grid container spacing={0}>
					<Grid item className={classes.gridItemLogo} xs={12}>
						<Link component={ReactRouterDom} to="/"><Logo
							brand="simon-yates" variant="grey-100" width={128}
						/></Link>
					</Grid>
				</Grid>

				<Grid container spacing={0}>
					<Grid item className={classes.gridItemLeft} xs={6}>
						<Typography className={classes.typography} variant="caption" group="secondary" weight="regular">
							&copy; 2021 Sybaris Analytics Corporation<br/>
						</Typography>
						<Typography className={classes.typography} variant="caption" group="secondary" weight="regular">
							<Link className={classes.typography} component={ReactRouterDom} to="/legal">Legal</Link>
						</Typography>
					</Grid>
					<Grid item className={classes.gridItemRight} xs={6}>
						<Link
							className={classes.socialIcon}
							rel="noopener"
							title="Find me on LinkedIn"
							target="_blank"
							href="https://www.linkedin.com/in/simonyates/"
						><Logo brand="linkedin" variant="grey-300" width={24}/></Link>

						<Link
							className={classes.socialIcon}
							rel="noopener"
							title="Follow me on Twitter"
							target="_blank"
							href="https://twitter.com/cheftechnical"
						><Logo brand="twitter" variant="grey-300" width={24}/></Link>
					</Grid>
				</Grid>
			</MyContainer>
		</div>
	);
};
