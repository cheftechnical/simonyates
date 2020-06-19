import * as React from 'react';
import {Grid, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<Grid container>
				<Grid item xs={9}>
					<div><Link component={ReactRouterDom} to="/">Simon Yates</Link></div>
					<div>&copy; 2020 Sybaris Analytics Corporation</div>
					<div><Link component={ReactRouterDom} to="/privacy-and-terms">Privacy &amp; Terms</Link></div>
				</Grid>
				<Grid item xs={3}>
					<Link
						title="View my LinkedIn"
						target="_blank"
						href="https://www.linkedin.com/in/simonyates/"
					>[linkedIn]</Link>
					<Link
						title="View my Twitter"
						target="_blank"
						href="https://twitter.com/cheftechnical"
					>[twitter]</Link>
				</Grid>
			</Grid>
		</footer>
	);
};
