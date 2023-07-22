import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color/Color';
import rem from '../../styling/rem';
import Image from '../Image';
import {ReactElement} from 'react';
import {Link} from '@material-ui/core';

interface Props {
	alt: string;
	callToAction?: string | ReactElement;
	caption?: string | ReactElement;
	href?: string | undefined;
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
	const {alt, callToAction, caption, href, next, src} = props;

	const rootClassName = (next)
		? `${classes.root} ${classes.rootNext}`
		: classes.root;

	const renderedFigureContent = React.useMemo(() => {
		const image = (
			<Image
				alt={alt}
				className={classes.image}
				src={src}
			/>
		);

		if (href) {
			return (
				<Link href={href} target="_blank">{image}</Link>
			);
		}

		return image;
	}, [alt, classes.image, href, src]);

	const renderedFigureCaption = React.useMemo(() => {
		if (!caption) return;

		const captionContent = (callToAction)
			? (
				<div>
					<div>
						{caption}
					</div>
					<div>
						<Link href={href} target="_blank">
							Watch Video &rsaquo;
						</Link>
					</div>
				</div>
			) : (
				<React.Fragment>
					{caption}
				</React.Fragment>
			);

		return (
			<figcaption className={classes.caption}>
				{captionContent}
			</figcaption>
		);
	}, [callToAction, classes.caption, caption, href]);

	return (
		<figure className={rootClassName}>{renderedFigureContent}{renderedFigureCaption}</figure>
	);
};
