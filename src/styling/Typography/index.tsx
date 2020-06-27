import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../Color';
import rem from '../rem';

// type primary = 'primary';
// type secondary = 'secondary';

export enum Groups {
	primary = 'primary',
	secondary = 'secondary'
}


interface Props {
	children: any | any[] | undefined;
	className?: string;
	group: 'primary' | 'secondary' | undefined;
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'subtitle' | 'caption' | undefined;
	weight: 'light' | 'regular' | 'medium' | 'semibold' | undefined;
}

// const defaultProps = {
// 	children: undefined,
// 	className: undefined,
// 	group: 'primary',
// 	variant: '"body"',
// 	weight: '"regular"'
// }

const useStyles = makeStyles((theme) => ({
	// ---[ primary ]---
	primary_h1_regular: {
		margin: 0,
		padding: 0,

		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(54),
		lineHeight: rem(88),
		letterSpacing: rem(-0.5),
		color: color.grey['900']
	},
	primary_h2_regular: {
		margin: 0,
		padding: 0,

		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(34),
		lineHeight: rem(56),
		letterSpacing: rem(0.25),
		color: color.grey['900']
	},
	primary_h3_regular: {
		margin: 0,
		padding: 0,

		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(24),
		lineHeight: rem(32),
		color: color.grey['900']
	},
	primary_h3_medium: {
		fontFamily: '"Tiempos Text Medium"',
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: rem(24),
		lineHeight: rem(32),
		letterSpacing: rem(0.25),
		color: color.grey['900']
	},
	primary_h3_semibold: {
		fontFamily: '"Tiempos Text Semibold"',
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: rem(23),
		lineHeight: rem(32),
		letterSpacing: rem(0.5),
		color: color.grey['900']
	},
	primary_h4_medium: {
		fontFamily: '"Tiempos Text Medium"',
		fontStyle: 'normal',
		fontWeight: 500,
		fontSize: rem(16),
		lineHeight: rem(24),
		letterSpacing: rem(0.5),
		color: color.grey['900']
	},
	primary_h4_semibold: {
		fontFamily: '"Tiempos Text Semibold"',
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: rem(16),
		lineHeight: rem(24),
		letterSpacing: rem(0.5),
		color: color.grey['900']
	},
	primary_body_regular: {
		margin: 0,
		padding: 0,

		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(16),
		lineHeight: rem(24),
		letterSpacing: rem(0.5),
		color: color.grey['900']
	},
	primary_body_semibold: {
		fontFamily: '"Tiempos Text Semibold"',
		fontStyle: 'normal',
		fontWeight: 600,
		fontSize: rem(16),
		lineHeight: rem(24),
		letterSpacing: rem(0.5),
		color: color.grey['900']
	},
	primary_subtitle_regular: {
		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(14),
		lineHeight: rem(16),
		letterSpacing: rem(0.25),
		color: color.grey['900']
	},
	primary_caption_regular: {
		fontFamily: '"Tiempos Text"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(12),
		lineHeight: rem(16),
		letterSpacing: rem(0.4),
		color: color.grey['900']
	},


	// ---[ secondary ]---
	secondary_h3_light: {
		fontFamily: '"Apercu Light", "Comic Sans Ms"',
		fontStyle: 'normal',
		fontWeight: 300,
		fontSize: rem(24),
		lineHeight: rem(40),
		color: color.grey['900']
	},
	secondary_body_regular: {
		fontFamily: '"Apercu Regular", "Comic Sans Ms"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(16),
		lineHeight: rem(24),
		letterSpacing: rem(0.5),
		color: color.grey['900'],


		margin: 0 // added because some margin is getting from somewhere (probably material)
	},
	secondary_subtitle_regular: {
		fontFamily: '"Apercu Regular", "Comic Sans Ms"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(14),
		lineHeight: rem(16),
		letterSpacing: rem(0.25),
		color: color.grey['900']
	},
	secondary_caption_regular: {
		margin: 0,
		fontFamily: '"Apercu Regular", "Comic Sans Ms"',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(12),
		lineHeight: rem(16),
		letterSpacing: rem(0.4),
		color: color.grey['900']
	}
}));

interface WeightMap {
	[weight: string]: string;
}

interface ElementMap {
	[element: string]: WeightMap
}

interface ClassMap {
	[key: string]: ElementMap;
}

export default function Typography(props: Props) {
	const classes = useStyles();
	const {children, className, group, variant, weight} = props;

	const result = React.useMemo(() => {
		const classMap: ClassMap = {
			primary: {
				h1: {
					regular: classes.primary_h1_regular,
				},
				h2: {
					regular: classes.primary_h2_regular,
				},
				h3: {
					regular: classes.primary_h3_regular,
					medium: classes.primary_h3_medium,
					semibold: classes.primary_h3_semibold,
				},
				h4: {
					medium: classes.primary_h4_medium,
					semibold: classes.primary_h4_semibold,
				},
				body: {
					regular: classes.primary_body_regular,
					semibold: classes.primary_body_semibold,
				},
				subtitle: {
					regular: classes.primary_subtitle_regular,
				},
				caption: {
					regular: classes.primary_caption_regular,
				}
			},
			secondary: {
				h3: {
					light: classes.secondary_h3_light,
				},
				body: {
					regular: classes.secondary_body_regular,
				},
				subtitle: {
					regular: classes.secondary_subtitle_regular,
				},
				caption: {
					regular: classes.secondary_caption_regular,
				}
			}
		};

		const themeClass = classMap[group || 'primary'][variant || 'body'][weight || 'regular'];

		switch (variant) {
			case 'h1':
				return <h1 className={`${themeClass} ${className}`}>{children}</h1>
			case 'h2':
				return <h2 className={`${themeClass} ${className}`}>{children}</h2>
			case 'h3':
				return <h3 className={`${themeClass} ${className}`}>{children}</h3>
			case 'h4':
				return <h4 className={`${themeClass} ${className}`}>{children}</h4>
			default:
				return <p className={`${themeClass} ${className}`}>{children}</p>
		}
	}, [children, classes, className, group, variant, weight]);

	return (
		<React.Fragment>
			{result}
		</React.Fragment>
	);
};
/*
function h1(props: Props) {
	const {children} = props;

	return (
		<h1>{children}</h1>
	);
}

function h2(props: Props) {
	const {children} = props;

	return (
		<h2>{children}</h2>
	);
}

function h3(props: Props) {
	const {children} = props;

	return (
		<h3>{children}</h3>
	);
}

function h4(props: Props) {
	const {children} = props;

	return (
		<h4>{children}</h4>
	);
}

function p(props: Props) {
	const {children} = props;

	return (
		<p>{children}</p>
	);
}
*/