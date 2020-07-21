import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';

const useStyles = makeStyles((theme) => ({
	typography: {
		marginTop: theme.spacing(248/8),
		marginBottom: theme.spacing(416/8)
	}
}));

export default function Content() {
	const classes = useStyles();

	return (
		<Typography className={classes.typography} group="primary" variant="h1" weight="regular" >
			Hi, I&rsquo;m Simon Yates.<br/>
			I couldn&rsquo;t fit everything into LinkedIn,<br/>
			so I made a website.
		</Typography>
	);
};
