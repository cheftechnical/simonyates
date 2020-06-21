import * as React from 'react';
import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';

interface Props {
	href: string;
	selected: boolean;
	title: string;
}

export default function Item(props: Props) {
	const {href, selected, title} = props;

	if (selected) {
		return (
			<div><b>{title}</b></div>
		);
	}

	return (
		<Link component={ReactRouterDom} to={href}>{title}</Link>
	);
};
