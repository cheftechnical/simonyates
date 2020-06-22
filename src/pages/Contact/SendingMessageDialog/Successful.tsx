import * as React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import {Link} from '@material-ui/core';
import Logo from '../../../components/Logo';

export default function Successful() {
	return (
		<div>
			<CheckIcon/>
			Thank you.
			We&rsquo;ll chat soon.

			In the meantime, let&rsquo;s connect on social media:

			<Link
				title="Find me on LinkedIn"
				target="_blank"
				href="https://www.linkedin.com/in/simonyates/"
			><Logo brand="linkedin" variant="grey-500"/>LinkedIn</Link>

			<Link
				title="Follow me on Twitter"
				target="_blank"
				href="https://twitter.com/cheftechnical"
			><Logo brand="twitter" variant="grey-500"/>Twitter</Link>
		</div>
	);
};
