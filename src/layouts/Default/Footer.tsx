import * as React from 'react';
import {Grid, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../components/Logo';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import Typography from '../../styling/Typography';
import rem from '../../styling/rem';
import MyContainer from '../../styling/MyContainer';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(32 / 8),
		paddingBottom: theme.spacing(24 / 8),
		backgroundColor: color.grey['900']
	},

	colRight: {
		paddingTop: theme.spacing((57 - 32) / 8),
		textAlign: 'right'
	},
	image: {
		width: rem(128),
	},
	link: {
		...theme.typography.h1
	},
	logo: {
		marginBottom: theme.spacing(12 / 8),
	},
	socialIcon: {
		marginLeft: rem(24),
	},
	text: {
		color: color.grey['400']
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<MyContainer>
				<Grid container>
					<Grid item xs={9}>
						<div className={classes.logo}>
							<Link component={ReactRouterDom} to="/"><Logo
								brand="simon-yates" variant="grey-100" width={128}
							/></Link>
						</div>
						<Typography className={classes.text} variant="caption" group="secondary" weight="regular">
							&copy; 2020 Sybaris Analytics Corporation<br/>
							<Link className={classes.text} component={ReactRouterDom} to="/legal">Legal</Link>
						</Typography>
					</Grid>
					<Grid item xs={3} className={classes.colRight}>
						<Link
							className={classes.socialIcon}
							title="Find me on LinkedIn"
							target="_blank"
							href="https://www.linkedin.com/in/simonyates/"
						><Logo brand="linkedin" variant="grey-300" width={24}/></Link>

						<Link
							className={classes.socialIcon}
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
