import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	author?: string;
	publisher?: string;
	title: string;
	when: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: rem(16),
	},
}));

export default function WorkAtPublication(props: Props) {
	const classes = useStyles();
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
		<div className={classes.root}>
			<Typography group="primary" variant="body" weight="regular">
				{renderedAuthor}{when}. {renderedTitle}{renderedPublisher}
			</Typography>
		</div>
	);
};
