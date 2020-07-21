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

	const renderedTitle = React.useMemo(() => {
		const words = title.split(' ');

		const a = words.slice(0, words.length - 1).join(' ');
		const b = words[words.length - 1];

		return (
			<em>&ldquo;{a}&nbsp;{b}&rdquo;</em>
		);

	}, [title]);

	const renderedAuthor = (author)
		? <React.Fragment>{author}. </React.Fragment>
		: <React.Fragment/>;

	const renderedPublisher = (publisher)
		? <React.Fragment>, {publisher}</React.Fragment>
		: <React.Fragment/>;

	return (
		<Typography next group="primary" variant="body" weight="regular">
			{renderedAuthor}({when}) {renderedTitle}{renderedPublisher}
		</Typography>
	);
};
