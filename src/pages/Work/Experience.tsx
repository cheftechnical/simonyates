import * as React from 'react';
import {Box, Button, Grid} from '@material-ui/core';
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
	h3Link: {
		color: color.grey['600']
	}
}));

export default function Experience(props: Props) {
	const classes = useStyles();
	const {children, employer, href, title, when} = props;

	return (
		<Grid container>
			<Grid item xs={1}>
				<Link component={ReactRouterDom} to={href}>[logo]</Link>
			</Grid>
			<Grid item xs={11}>
				<Typography group="primary" variant="h3" weight="regular">
					<Link
						className={classes.h3Link}
						component={ReactRouterDom}
						to={href}
					>
						{employer}, {title}, {when}
					</Link>
				</Typography>

				<div>{children}</div>

				<div>
					<Button endIcon={<ArrowRightIcon/>} href={href} variant="text">
						Read Full Details
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};
