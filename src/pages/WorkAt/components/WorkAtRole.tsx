import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children: any;
}

const useStyles = makeStyles((theme) => ({
	role: {
		marginBottom: theme.spacing(8/8),
	},
}));

export default function WorkAtRole(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<Typography className={classes.role} component="p" group="primary" variant="h4" weight="medium">{children}</Typography>
	);
};
