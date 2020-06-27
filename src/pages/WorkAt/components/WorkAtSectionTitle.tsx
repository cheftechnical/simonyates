import * as React from 'react';
import Typography from '../../../styling/Typography';

interface Props {
	children?: any;
}

export default function WorkAtSectionTitle(props: Props) {
	const {children} = props;

	return (
		<Typography group="primary" variant="h3" weight="regular">
			{children}
		</Typography>
	);
};
