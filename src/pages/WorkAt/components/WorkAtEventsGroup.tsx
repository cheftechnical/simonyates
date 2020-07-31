import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	children?: any;
	name: string;
	next?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingLeft: rem(40),
	},
	next: {
		paddingTop: rem(40),
	}
}));

export default function WorkAtEventsGroup(props: Props) {
	const classes = useStyles();
	const {children, name, next} = props;

	const className = (next)
		? `${classes.root} ${classes.next}`
		: classes.root;

	return (
		<div className={className}>
			<Typography group="primary" variant="h4" weight="semibold">
				{name}
			</Typography>
			<div>{children}</div>
		</div>
	);
};
