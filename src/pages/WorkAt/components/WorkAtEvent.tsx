import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	date: string;
	next?: boolean;
	title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: 0,
	},
	next: {
		paddingTop: rem(16),
	}
}));

export default function WorkAtEvent(props: Props) {
	const classes = useStyles();
	const {date, next, title} = props;

	const className = (next)
		? `${classes.root} ${classes.next}`
		: classes.root;

	return (
		<div className={className}>
			<Typography group="primary" variant="body" weight="regular">
				{date} &bull; {title}
			</Typography>
		</div>
	);
};
