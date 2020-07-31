import * as React from 'react';
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';

interface Props {
	children?: any;
	host: string;
	next?: boolean;
	when: string;
	title: string;
}

const useStyles = makeStyles((theme) => ({
	root: {

	},
	rootNext: {
		paddingTop: theme.spacing(40 / 8)
	},
	host: {
		paddingTop: theme.spacing(16 / 8),
		color: color.grey['600']
	},
	when: {
		color: color.grey['600']
	}
}));

export default function FeaturedEvent(props: Props) {
	const classes = useStyles();
	const {children, host, next, title, when} = props;

	const rootClass = (next)
		? `${classes.root} ${classes.rootNext}`
		: classes.root;

	return (
		<div className={rootClass}>
			<Typography group="primary" variant="h4" weight="medium">
				{title}
			</Typography>

			<Typography className={classes.host} group="primary" variant="body" weight="regular">
				{host}
			</Typography>

			<Typography className={classes.when} group="primary" variant="body" weight="regular">
				{when}
			</Typography>

			<div>
				{children}
			</div>
		</div>
	);
};