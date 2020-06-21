import * as React from 'react';
import {Box} from '@material-ui/core';
import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';

interface Props {
	children: any[] | any;
	employer: string;
	href: string;
	title: string;
	when: string;
}

export default function Experience(props: Props) {
	const {children, employer, href, title, when} = props;

	return (
		<Box display="flex">
			<Box>
				<Link component={ReactRouterDom} to={href}>[logo]</Link>
			</Box>
			<Box>
				<div><Link component={ReactRouterDom} to={href}>{employer}, {title}, {when}</Link></div>
				<div>{children}</div>
				<div>Read Full Details [arrow]</div>
			</Box>
		</Box>
	);
};
