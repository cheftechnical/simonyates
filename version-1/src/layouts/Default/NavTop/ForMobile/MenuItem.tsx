import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import rem from '../../../../styling/rem';

interface Props {
	href: string;
	selected: boolean;
	title: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(24 / 8)
	},
	active: {
		fontWeight: 'bold',
	},
	default: {
		fontSize: rem(24),
		lineHeight: rem(32),

		'& .MuiButton-label': {
			paddingBottom: 0
		}
	}
}));

export default function MenuItem(props: Props) {
	const classes = useStyles();
	const {href, selected, title} = props;

	if (selected) {
		return (
			<div className={classes.root}>
				<Button disableRipple className={`${classes.default} ${classes.active}`} color="secondary" href={href}>
					{title}
				</Button>
			</div>
		);
	}

	return (
		<div className={classes.root}>
			<Button disableRipple className={classes.default} color="secondary" href={href}>
				{title}
			</Button>
		</div>
	);
}