// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import rem from '../../styling/rem';

interface Props {
	alt: string;
	className?: any;
	src: string;
}

// @todo mui5
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		marginBottom: rem(-4),
// 		width: '100%'
// 	}
// }));

export default function Image(props: Props) {
	// const classes = useStyles();
	const {alt, className, src} = props;

	// return (
	// 	<img
	// 		alt={alt}
	// 		className={`${classes.root} ${className}`}
	// 		src={process.env.PUBLIC_URL + src}
	// 	/>
	// );

	return (
		<div>[Image]</div>
	)
}