import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing((80-12) / 8),
		marginBottom: theme.spacing(32 / 8)
	}
}));

export default function WorkAtSectionTitle(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<div className={classes.root}>
			<Typography className={classes.root} group="primary" variant="h3" weight="regular">
				{children}
			</Typography>
		</div>
	);
};
