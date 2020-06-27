import * as React from 'react';
import Typography from '../../styling/Typography';

interface Props {
	children?: any;
}

export default function SectionTitle(props: Props) {
	const {children} = props;

	return (
		<Typography group="primary" variant="h2" weight="regular">
			{children}
		</Typography>
	)
}