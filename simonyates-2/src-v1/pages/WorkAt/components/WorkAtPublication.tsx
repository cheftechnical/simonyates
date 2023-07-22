import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import {Link} from '@material-ui/core';

interface Props {
	author?: string;
	link?: string | undefined;
	next?: boolean;
	publisher?: string;
	title: string;
	date: string;
}

const useStyles = makeStyles(() => ({
	root: {
		paddingTop: 0,
	},
	next: {
		paddingTop: rem(16),
	}
}));

export default function WorkAtPublication(props: Props) {
	const classes = useStyles();
	const {author, link, next, publisher, title, date} = props;

	const renderedTitle = React.useMemo(() => {
		// Prevent orphans
		const words = title.split(' ');
		const a = words.slice(0, words.length - 1).join(' ');
		const b = words[words.length - 1];

		const content = (<React.Fragment>{a}&nbsp;{b}</React.Fragment>);

		if (link) {
			return (
				<React.Fragment>
					<em>&ldquo;<Link href={link} target="_blank">{content}</Link>&rdquo;</em>
				</React.Fragment>
			);
		}

		return (
			<React.Fragment>
				<em>&ldquo;{content}&rdquo;</em>
			</React.Fragment>
		);

	}, [link, title]);

	const renderedAuthor = (author)
		? <React.Fragment>{author}. </React.Fragment>
		: <React.Fragment/>;

	const renderedPublisher = (publisher)
		? <React.Fragment>. {publisher}</React.Fragment>
		: <React.Fragment/>;

	const className = (next)
		? `${classes.root} ${classes.next}`
		: classes.root;

	return (
		<div className={className}>
			<Typography group="primary" variant="body" weight="regular">
				{renderedAuthor}{date}. {renderedTitle}{renderedPublisher}
			</Typography>
		</div>
	);
};
