import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingLeft: rem(40),
		paddingTop: rem(40),
	},
}));

export default function WorkAtPublications(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<div className={classes.root}>
			{children}
		</div>
	);
}