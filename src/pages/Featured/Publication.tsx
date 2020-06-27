import * as React from 'react';
import {Chip} from '@material-ui/core';
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';

interface Props {
	children: any | any[] | never[];
	name: string;
	publisher: string;
	tags: string[];
	when: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(40/8),
		marginLeft: theme.spacing(40/8),
	},
	chips: {
		marginBottom: theme.spacing(24/8)
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
	publisherAndWhen: {
		marginBottom: theme.spacing(24/8)
	}
}));

export default function Publication(props: Props) {
	const classes = useStyles();
	const {children, name, publisher, tags, when} = props;

	return (
		<div className={classes.root}>
			<Typography className={classes.name} group="primary" variant="h4" weight="medium">{name}</Typography>
			<Typography className={classes.publisherAndWhen} group="primary" variant="body" weight="regular">{publisher}, <span className={classes.when}>{when}</span></Typography>
			<div className={classes.chips}>
				{tags.map((item, index) => (
					<Chip key={index} label={item}/>
				))}
			</div>
			<div className={classes.children}>
				{children}
			</div>
		</div>
	);
}