import * as React from 'react';
import {Grid, Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Logo from '../../components/Logo';

export default function Footer() {
	return (
		<footer>
			<Grid container>
				<Grid item xs={9}>
					<div><Link component={ReactRouterDom} to="/">Simon Yates</Link></div>
					<div>&copy; 2020 Sybaris Analytics Corporation</div>
					<div><Link component={ReactRouterDom} to="/legal">Legal</Link></div>
				</Grid>
				<Grid item xs={3}>
					<Link
						title="Find me on LinkedIn"
						target="_blank"
						href="https://www.linkedin.com/in/simonyates/"
					><Logo brand="linkedin" variant="grey-300"/></Link>

					<Link
						title="Follow me on Twitter"
						target="_blank"
						href="https://twitter.com/cheftechnical"
					><Logo brand="twitter" variant="grey-300"/></Link>
				</Grid>
			</Grid>
		</footer>
	);
};
