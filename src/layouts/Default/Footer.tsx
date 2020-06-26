import * as React from 'react';
import {Container, Grid, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../components/Logo';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import Typography from '../../styling/Typography';
import Image from '../../components/Image';
import rem from '../../styling/rem';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(88/8),
		paddingTop: theme.spacing(32/8),
		paddingBottom: theme.spacing(24/8),
		backgroundColor: color.grey['900']
	},

	colRight: {
		textAlign: 'right'
	},
	image: {
		width: rem(128),
		fill: 'magenta'
	},
	link: {
		...theme.typography.h1
	},
	socialIcon: {
		marginLeft: theme.spacing(3)
	},
	text: {
		color: color.grey['400']
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container>
				<Grid container>
					<Grid item xs={9}>
						<div>
							<Link component={ReactRouterDom} to="/"><Image
								className={classes.image}
								alt="Simon Yates"
								src="/images/simon-yates.svg"
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
						><Logo brand="linkedin" variant="grey-300"/></Link>

						<Link
							className={classes.socialIcon}
							title="Follow me on Twitter"
							target="_blank"
							href="https://twitter.com/cheftechnical"
						><Logo brand="twitter" variant="grey-300"/></Link>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
