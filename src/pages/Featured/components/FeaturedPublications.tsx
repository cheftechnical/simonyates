import * as React from 'react';
import ConditionalIndent from '../../../components/ConditionalIndent';

interface Props {
	children?: any;
}

export default function FeaturedPublications(props: Props) {
	const {children} = props;

	return (
		<ConditionalIndent>
			{children}
		</ConditionalIndent>
	);
};
