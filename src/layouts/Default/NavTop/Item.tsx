import * as React from 'react';
import {Button, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	href: string;
	selected: boolean;
	title: string;
}

const useStyles = makeStyles((theme) => ({
	link: {

	}
}));

export default function Item(props: Props) {
	const classes = useStyles();
	const {href, selected, title} = props;

	if (selected) {
		return (
			<div><b>{title}</b></div>
		);
	}

	return (
		<Button href={href}>{title}</Button>
	);

	// return (
	// 	<Link className={classes.link} component={ReactRouterDom} to={href}>{title}</Link>
	// );
};
