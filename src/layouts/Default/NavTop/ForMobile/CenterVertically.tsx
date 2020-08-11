/**
 * Component provides syntactic-sugar for vertically centering its content
 */
import * as React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
	}
}));

export default function CenterVertically(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<Box alignItems="center" className={classes.root} display="flex">
			<Box>
				{children}
			</Box>
		</Box>
	);
};
