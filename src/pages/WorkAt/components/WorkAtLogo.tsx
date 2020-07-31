import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../../../components/Logo';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(8 / 8),
	}
}));

interface Props {
	brand: any;
	variant: any;
}

export default function WorkAtLogo(props: Props) {
	const classes = useStyles();
	const {brand, variant} = props;

	return (
		<div className={classes.root}>
			<Logo brand={brand} variant={variant}/>
		</div>
	);
}