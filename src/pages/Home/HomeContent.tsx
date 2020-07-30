import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(248/8),
		paddingBottom: theme.spacing(416/8),
		// backgroundColor: 'magenta'
	},
	typography: {
	}
}));

export default function HomeContent() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography className={classes.typography} group="primary" variant="h1" weight="regular" >
				Hi, I&rsquo;m Simon Yates.<br/>
				I couldn&rsquo;t fit everything into LinkedIn,<br/>
				so I made a website.
			</Typography>
		</div>
	);
};
