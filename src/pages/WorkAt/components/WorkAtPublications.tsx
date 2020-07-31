import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	children?: any;
	next?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingLeft: rem(40),
	},
	next: {
		paddingTop: rem(40),
	}
}));

export default function WorkAtPublications(props: Props) {
	const classes = useStyles();
	const {children, next} = props;

	const className = (next)
		? `${classes.root} ${classes.next}`
		: classes.root;

	return (
		<div className={className}>
			{children}
		</div>
	);
}