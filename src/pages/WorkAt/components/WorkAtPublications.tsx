import * as React from 'react';

interface Props {
	children?: any;
}

export default function WorkAtPublications(props: Props) {
	const {children} = props;

	return (
		<div>
			{children}
		</div>
	);
}