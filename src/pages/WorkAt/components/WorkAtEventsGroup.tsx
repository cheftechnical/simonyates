import * as React from 'react';
import Typography from '../../../styling/Typography';

interface Props {
	children?: any;
	name: string;
}

export default function WorkAtEventsGroup(props: Props) {
	const {children, name} = props;

	return (
		<Typography group="primary" variant="body" weight="regular">
			<div>{name}</div>
			<div>{children}</div>
		</Typography>
	);
};
