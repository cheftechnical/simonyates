import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

interface Props {
	children?: any;
	name: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingLeft: rem(40),
		paddingTop: rem(40),
	},
}));

export default function WorkAtEventsGroup(props: Props) {
	const classes = useStyles();
	const {children, name} = props;

	return (
		<div className={classes.root}>
			<Typography group="primary" variant="h4" weight="semibold">
				{name}
			</Typography>
			<div>{children}</div>
		</div>
	);
};
