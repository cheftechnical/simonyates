import * as React from 'react';
import {Box, Button} from '@material-ui/core';
import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Typography from '../../styling/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
				<div>
					<Typography group="primary" variant="h3" weight="regular">
						<Link component={ReactRouterDom} to={href}>{employer}, {title}, {when}</Link>
					</Typography>
				</div>
				<div>{children}</div>
				<div>
					<Button endIcon={<ArrowRightIcon/>} href={href} variant="text">
						Read Full Details [arrow]
					</Button>
				</div>
			</Box>
		</Box>
	);
};
