import * as React from 'react';
import {Button, Grid} from '@material-ui/core';
import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Typography from '../../styling/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';

interface Props {
	children: any[] | any;
	employer: string;
	href: string;
	title: string;
	when: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(72/8)
	},
	employer: {
		marginBottom: theme.spacing(20/8)
	},
	h3Link: {
		color: color.grey['600']
	},
	readFullDetails: {
		marginTop: theme.spacing(32/8)
	}
}));

export default function Experience(props: Props) {
	const classes = useStyles();
	const {children, employer, href, title, when} = props;

	return (
		<Grid className={classes.root} container>
			<Grid item xs={1}>
				<Link component={ReactRouterDom} to={href}>[logo]</Link>
			</Grid>
			<Grid item xs={11}>
				<Typography className={classes.employer} group="primary" variant="h3" weight="regular">
					<Link
						className={classes.h3Link}
						component={ReactRouterDom}
						to={href}
					>
						{employer}, {title}, {when}
					</Link>
				</Typography>

				<div>{children}</div>

				<div className={classes.readFullDetails}>
					<Button endIcon={<ArrowRightIcon/>} href={href} variant="text">
						Read Full Details
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};
