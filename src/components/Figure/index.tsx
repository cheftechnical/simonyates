import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import rem from '../../styling/rem';
import Image from '../Image';

interface Props {
	alt: string;
	caption?: string;
	next?: boolean;
	src: string;
}

const useStyles = makeStyles((theme) => ({
	root: {

	},
	rootNext: {
		paddingTop: theme.spacing(40/8),
	},

	caption: {
		marginTop: theme.spacing((8-2) /8), // subtract 2 for automatic spacing

		// @todo I hate the way I coded this — the value is coming from Typography
		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(12),
		lineHeight: rem(16),
		letterSpacing: rem(0.4),

		color: color.grey['700']
	},
	image: {

	}
}));

export default function Figure(props: Props) {
	const classes = useStyles();
	const {alt, caption, next, src} = props;

	const rootClassName = (next)
		? `${classes.root} ${classes.rootNext}`
		: classes.root;

	return (
		<figure className={rootClassName}><Image
			alt={alt}
			className={classes.image}
			src={src}
		/>{caption && <figcaption className={classes.caption}>{caption}</figcaption>}</figure>
	);
};
