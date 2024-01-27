import * as React from 'react';
import ConditionalIndent from '../../../components/ConditionalIndent/ConditionalIndent';

interface Props {
	children?: any;
}

export default function WorkAtProjects(props: Props) {
	const {children} = props;

	return (
		<ConditionalIndent>
			{children}
		</ConditionalIndent>
	);
};
