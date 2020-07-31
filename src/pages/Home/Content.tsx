import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	box: {
		height: '100%',
	}
}));

export default function Content() {
	const classes = useStyles();

	return (
		<Box alignItems="center" className={classes.box} display="flex">
			<Box>
				<Typography group="primary" variant="h1" weight="regular" >
					Hi, I&rsquo;m Simon Yates.<br/>
					I couldn&rsquo;t fit everything into LinkedIn,<br/>
					so I made a website.
				</Typography>
			</Box>
		</Box>
	);
};
