import * as React from 'react';
import Typography from '../../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';
import FeaturedChips from './FeaturedChips';

interface Props {
	children: any | any[] | never[];
	name: string;
	next?: boolean;
	publisher: string;
	tags: string[];
	when: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
	},
	rootNext: {
		paddingTop: theme.spacing(40/8),
	},
	name: {
		marginBottom: theme.spacing(16/8),
	},
	when: {
		color: color.grey['600'],
	},
	children: {
		color: color.grey['700']
	},
	publisher: {
		color: color.grey['600'],
	}
}));

export default function FeaturedPublication(props: Props) {
	const classes = useStyles();
	const {children, name, next, publisher, tags, when} = props;

	const rootClass = (next)
		? `${classes.root} ${classes.rootNext}`
		: classes.root;

	return (
		<div className={rootClass}>
			<Typography className={classes.name} component="h3" group="primary" variant="h4" weight="medium">
				{name}
			</Typography>

			<Typography className={classes.publisher} group="primary" variant="body" weight="regular">
				{publisher}
			</Typography>

			<Typography className={classes.when} group="primary" variant="body" weight="regular">
				{when}
			</Typography>

			<FeaturedChips list={tags}/>

			<div className={classes.children}>
				{children}
			</div>
		</div>
	);
}