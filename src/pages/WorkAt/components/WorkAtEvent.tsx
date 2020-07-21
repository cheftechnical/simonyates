import * as React from 'react';
import Typography from '../../../styling/Typography';

interface Props {
	date: string;
	title: string;
}

export default function WorkAtEvent(props: Props) {
	const {date, title} = props;

	return (
		<Typography group="primary" variant="body" weight="regular">
			{date}, {title}
		</Typography>
	);
};
