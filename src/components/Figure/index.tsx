import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import rem from '../../styling/rem';

interface Props {
	alt: string;
	caption?: string;
	src: string;
}

const useStyles = makeStyles((theme) => ({
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
	}
}));

export default function Figure(props: Props) {
	const classes = useStyles();
	const {alt, caption, src} = props;

	return (
		<figure><img
			alt={alt}
			src={process.env.PUBLIC_URL + src}
			style={{width: '100%'}}
		/>{caption && <figcaption className={classes.caption}>{caption}</figcaption>}</figure>
	);
};
