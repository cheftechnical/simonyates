import * as React from 'react';
import {Button} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	href: string;
}

const useStyles = makeStyles((theme) => ({
	readFullDetails: {
		marginTop: theme.spacing(32/8)
	}
}));

export default function ReadFullDetails(props: Props) {
	const classes = useStyles();
	const {href} = props;

	return (
		<div className={classes.readFullDetails}>
			<Button endIcon={<ArrowRightIcon/>} href={href} variant="text">
				Read Full Details
			</Button>
		</div>
	);
}