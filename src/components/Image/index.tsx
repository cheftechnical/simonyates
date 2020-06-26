import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../styling/rem';

interface Props {
	alt: string;
	src: string;
}


const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: rem(-4),
		width: '100%'
	}
}));

export default function Image(props: Props) {
	const classes = useStyles();
	const {alt, src} = props;

	return (
		<img
			alt={alt}
			className={classes.root}
			src={process.env.PUBLIC_URL + src}
		/>
	)
}