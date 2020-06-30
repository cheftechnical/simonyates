import * as React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	href: string;
	selected: boolean;
	title: string;
}

const useStyles = makeStyles((theme) => ({
	active: {
		// fontFamily: '"Tiempos Text Bold"',
		fontWeight: 'bold',
	},
	button: {
		marginLeft: theme.spacing((40-16)/8)
	}
}));

export default function Item(props: Props) {
	const classes = useStyles();
	const {href, selected, title} = props;

	if (selected) {
		return (
			<Button className={`${classes.button} ${classes.active}`} href={href}>{title}</Button>
		);
	}

	return (
		<Button className={classes.button} href={href}>{title}</Button>
	);
};
