import * as React from 'react';
import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';

export default function Logo() {
	return (
		<div>
			<Link component={ReactRouterDom} to="/">Simon Yates</Link>
		</div>
	);
};
