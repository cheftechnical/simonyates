import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import EmployerTimeAndRole from '../EmployerRoleAndWhen';
import ReadFullDetails from './ReadFullDetails';

interface Props {
	children: any[] | any;
	employer: string;
	href: string;
	role: string;
	when: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(72/8)
	},
}));

export default function Experience(props: Props) {
	const classes = useStyles();
	const {children, employer, href, role, when} = props;

	return (
		<div className={classes.root}>
			<EmployerTimeAndRole employer={employer} href={href} role={role} when={when}/>
			<div>{children}</div>
			<ReadFullDetails href={href}/>
		</div>
	);
};
