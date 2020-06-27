import * as React from 'react';
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme) => ({
	intro: {
		marginBottom: theme.spacing(40/8),
		color: color.grey['700']
	}
}));

export default function SectionDescription(props: Props) {
	const classes = useStyles();

	const {children} = props;

	return (
		<Typography className={classes.intro} group="primary" variant="body" weight="regular">
			{children}
		</Typography>
	);
};
