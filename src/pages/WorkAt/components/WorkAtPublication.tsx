import * as React from 'react';
import Typography from '../../../styling/Typography';

interface Props {
	author?: string;
	publisher?: string;
	title: string;
	when: string;
}

export default function WorkAtPublication(props: Props) {
	const {author, publisher, title, when} = props;

	return (
		<Typography group="primary" variant="body" weight="regular">
			{author}. ({when}) <em>&ldquo;{title}&rdquo;</em>, {publisher}
		</Typography>
	);
};
