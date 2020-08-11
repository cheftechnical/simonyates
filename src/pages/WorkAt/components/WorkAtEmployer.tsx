import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';
import Typography from '../../../styling/Typography';

interface Props {
	employer: string;
}

const useStyles = makeStyles((theme) => ({
	employer: {
		// marginBottom: theme.spacing(28/8),
		color: color.grey['600']
	},
}));

export default function WorkAtEmployer(props: Props) {
	const classes = useStyles();
	const {employer} = props;

	return (
		<Typography className={classes.employer} group="primary" variant="h3" weight="regular">{employer}</Typography>
	);
};