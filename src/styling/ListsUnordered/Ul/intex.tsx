import * as React from 'react';

interface Props {
	children: any;
}

export default function Ul(props: Props) {
	const {children} = props;

	return (
		<ul>{children}</ul>
	);
};