import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme) => ({
	li: {
		...theme.typography.body1,
		marginBottom: theme.spacing(16/8),
		marginLeft: theme.spacing(-9/8),
		paddingLeft: theme.spacing(12/8)
	}
}));

export default function Li(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<li className={classes.li}>{children}</li>
	);
};
