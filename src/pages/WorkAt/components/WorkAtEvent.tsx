import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	date: string;
	title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: rem(16),
	},
}));

export default function WorkAtEvent(props: Props) {
	const classes = useStyles();
	const {date, title} = props;

	return (
		<div className={classes.root}>
			<Typography group="primary" variant="body" weight="regular">
				{date} &bull; {title}
			</Typography>
		</div>
	);
};
