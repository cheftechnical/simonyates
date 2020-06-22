import * as React from 'react';

interface Props {
	children: string;
	element: string;
	variant: string;
}

export default function Typography(props: Props) {
	const {children} = props;

	return (
		<p>{children}</p>
	);
};
