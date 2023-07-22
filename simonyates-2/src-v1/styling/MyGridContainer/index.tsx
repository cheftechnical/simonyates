import * as React from 'react';
import {Grid} from '@material-ui/core';

interface Props {
	children: NonNullable<React.ReactNode>;
	className?: string | undefined;
}

export default function MyGridContainer(props: Props) {
	const {children, className} = props;

	return (
		<Grid container className={className} spacing={3}>
			{children}
		</Grid>
	);
};