import * as React from 'react';
import {Chip} from '@material-ui/core';
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children: any | any[] | never[];
	name: string;
	publisher: string;
	tags: string[];
	when: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(40/8)
	}
}));

export default function Publication(props: Props) {
	const classes = useStyles();
	const {children, name, publisher, tags, when} = props;

	return (
		<div className={classes.root}>
			<Typography group="primary" variant="h4" weight="medium">{name}</Typography>
			<Typography group="primary" variant="body" weight="regular">{publisher}, {when}</Typography>
			<div>
				{tags.map((item, index) => (
					<Chip key={index} label={item}/>
				))}
			</div>
			<div>
				{children}
			</div>
		</div>
	);
}