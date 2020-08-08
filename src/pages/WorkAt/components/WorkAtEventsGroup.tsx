import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import ConditionalIndent from '../../../components/ConditionalIndent';

interface Props {
	children?: any;
	name: string;
	next?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
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
		<ConditionalIndent className={className}>
			<Typography group="primary" variant="h4" weight="semibold">
				{name}
			</Typography>
			<div>{children}</div>
		</ConditionalIndent>
	);
};
