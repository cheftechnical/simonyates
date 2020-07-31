import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: rem(40)
	},
}));

export default function FeaturedEvents(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<div className={classes.root}>
			{children}
		</div>
	);
};