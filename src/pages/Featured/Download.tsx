import * as React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	download: {
		marginTop: theme.spacing(24 / 8)
	}
}));

interface Props {
	href: string;
}

export default function Download(props: Props) {
	const classes = useStyles();
	const {href} = props;

	return (
		<Button className={classes.download} endIcon={<ArrowRightIcon/>} href={href} variant="text">
			Download
		</Button>
	);
};
