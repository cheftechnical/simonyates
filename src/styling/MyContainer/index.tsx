import * as React from 'react';
import {Container} from '@material-ui/core';

interface Props {
	children: NonNullable<React.ReactNode>;
	className?: string | undefined;
}

export default function MyContainer(props: Props) {
	const {children, className} = props;

		// <Container className={className} disableGutters>
	return (
		<Container className={className}>
			{children}
		</Container>
	);
};
