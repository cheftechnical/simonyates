import * as React from 'react';
import {Chip, Typography} from '@material-ui/core';

interface Props {
	children: any | any[] | never[];
	name: string;
	publisher: string;
	tags: string[];
	when: string;
}

export default function Publication(props: Props) {
	const {children, name, publisher, tags, when} = props;

	return (
		<div>
			<Typography variant="h3">{name}</Typography>
			<div>{publisher}, {when}</div>
			<div>
				{tags.map((item, index) => (
					<Chip key={index} label={item}/>
				))}
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}