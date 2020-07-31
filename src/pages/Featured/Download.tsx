import * as React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(24 / 8)
	},
	next: {
		paddingTop: theme.spacing(0 / 8),
	}
}));

interface Props {
	href: string;
	label?: string;
	next?: boolean;
}

const defaultProps = {
	label: 'Download'
}

export default function Download(props: Props) {
	const classes = useStyles();
	const {href, label, next} = {...defaultProps, ...props};

	const className = (next)
		? `${classes.root} ${classes.next}`
		: classes.root;

	return (
		<Button download className={className} endIcon={<ArrowRightIcon/>} href={href} variant="text">
			{label}
		</Button>
	);
};
