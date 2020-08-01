import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../Color';
import rem from '../rem';
import {CSSProperties} from '@material-ui/core/styles/withStyles';

export enum Groups {
	primary = 'primary',
	secondary = 'secondary'
}

export interface Props {
	children?: any | any[] | undefined;
	className?: string;
	group: 'primary' | 'secondary' | undefined;
	next?: boolean;
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'subtitle' | 'caption' | undefined;
	weight: 'light' | 'regular' | 'medium' | 'semibold' | undefined;
}

const defaultSerifFonts =`"Times New Roman", Times, serif`;
const defaultSansSerifFonts = `"Helvetica", "Arial", "sans-serif"`;
// const defaultTestFonts = `"Comic Sans Ms"`;

// Apercu
const fontFamilyApercuRegular = `"Apercu Regular", ${defaultSansSerifFonts}`;
const fontFamilyApercuLight =  `"Apercu Light", ${defaultSansSerifFonts}`;

// Tiempos Text
const fontFamilyTiemposTextMedium = `"Tiempos Text Medium", ${defaultSerifFonts}`;
const fontFamilyTiemposTextRegular = `"Tiempos Text", ${defaultSerifFonts}`;
const fontFamilyTiemposTextSemibold = `"Tiempos Text", ${defaultSerifFonts}`; // the semi-bold uses the regular family, but with a different weight

const primary_h1_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(54),
	lineHeight: rem(88),
	letterSpacing: rem(-0.5),
	color: color.grey['900']
};

const primary_h2_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(34),
	lineHeight: rem(56),
	letterSpacing: rem(0.25),
	color: color.grey['900']
};

const primary_h3_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(24),
	lineHeight: rem(32),
	color: color.grey['900']
};

const primary_h3_medium: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextMedium,
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: rem(24),
	lineHeight: rem(32),
	letterSpacing: rem(0.25),
	color: color.grey['900']
};

const primary_h3_semibold: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextSemibold,
	fontStyle: 'normal',
	fontWeight: 600,
	fontSize: rem(23),
	lineHeight: rem(32),
	letterSpacing: rem(0.5),
	color: color.grey['900']
};

const primary_h4_medium: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextMedium,
	fontStyle: 'normal',
	fontWeight: 500,
	fontSize: rem(16),
	lineHeight: rem(24),
	letterSpacing: rem(0.5),
	color: color.grey['900']
};

const primary_h4_semibold: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextSemibold,
	fontStyle: 'normal',
	fontWeight: 600,
	fontSize: rem(16),
	lineHeight: rem(24),
	letterSpacing: rem(0.5),
	color: color.grey['900']
};

const primary_body_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(16),
	lineHeight: rem(24),
	letterSpacing: rem(0.5),
	color: color.grey['900']
};

const primary_body_semibold: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextSemibold,
	fontStyle: 'normal',
	fontWeight: 600,
	fontSize: rem(16),
	lineHeight: rem(24),
	letterSpacing: rem(0.5),
	color: color.grey['900']
}

const primary_subtitle_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(14),
	lineHeight: rem(16),
	letterSpacing: rem(0.25),
	color: color.grey['900']
};

const primary_caption_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyTiemposTextRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(12),
	lineHeight: rem(16),
	letterSpacing: rem(0.4),
	color: color.grey['900']
};

const secondary_h3_light: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyApercuLight,
	fontStyle: 'normal',
	fontWeight: 300,
	fontSize: rem(24),
	lineHeight: rem(40),
	color: color.grey['900']
};

const secondary_body_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyApercuRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(16),
	lineHeight: rem(24),
	letterSpacing: rem(0.5),
	color: color.grey['900'],
};

const secondary_body_light: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyApercuLight,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(16),
	lineHeight: rem(24),
	letterSpacing: rem(0.5),
	color: color.grey['900'],
};

const secondary_subtitle_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyApercuRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(14),
	lineHeight: rem(16),
	letterSpacing: rem(0.25),
	color: color.grey['900'],
};

const secondary_caption_regular: CSSProperties = {
	margin: 0,
	padding: 0,

	fontFamily: fontFamilyApercuRegular,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontSize: rem(12),
	lineHeight: rem(16),
	letterSpacing: rem(0.4),
	color: color.grey['900'],
};




const useStyles = makeStyles(() => ({
	primary_h1_regular: {
		...primary_h1_regular
	},
	primary_h1_regular_next: {
		...primary_h1_regular,
		marginTop: primary_h2_regular.lineHeight
	},


	primary_h2_regular: {
		...primary_h2_regular
	},
	primary_h2_regular_next: {
		...primary_h2_regular,
		marginTop: primary_h2_regular.lineHeight
	},


	primary_h3_regular: {
		...primary_h3_regular
	},
	primary_h3_regular_next: {
		...primary_h3_regular,
		marginTop: primary_h3_regular.lineHeight
	},


	primary_h3_medium: {
		...primary_h3_medium,
	},
	primary_h3_medium_next: {
		...primary_h3_medium,
		marginTop: primary_h3_medium.lineHeight
	},


	primary_h3_semibold: {
		...primary_h3_semibold
	},
	primary_h3_semibold_next: {
		marginTop: primary_h3_semibold.lineHeight
	},


	primary_h4_medium: {
		...primary_h4_medium
	},
	primary_h4_medium_next: {
		...primary_h4_medium,
		marginTop: primary_h4_medium.lineHeight
	},


	primary_h4_semibold: {
		...primary_h4_semibold
	},
	primary_h4_semibold_next: {
		...primary_h4_semibold,
		marginTop: primary_h4_semibold.lineHeight
	},


	primary_body_regular: {
		...primary_body_regular
	},
	primary_body_regular_next: {
		...primary_body_regular,
		marginTop: primary_h4_semibold.lineHeight
	},


	primary_body_semibold: {
		...primary_body_semibold
	},
	primary_body_semibold_next: {
		...primary_body_semibold,
		marginTop: primary_body_semibold.lineHeight
	},


	primary_subtitle_regular: {
		...primary_subtitle_regular
	},
	primary_subtitle_regular_next: {
		...primary_subtitle_regular,
		marginTop: primary_subtitle_regular.lineHeight
	},

	primary_caption_regular: {
		...primary_caption_regular

	},
	primary_caption_regular_next: {
		...primary_caption_regular,
		marginTop: primary_subtitle_regular.lineHeight
	},


	// ---[ secondary ]---
	secondary_h3_light: {
		...secondary_h3_light
	},
	secondary_h3_light_next: {
		...secondary_h3_light,
		marginTop: primary_subtitle_regular.lineHeight
	},


	secondary_body_regular: {
		...secondary_body_regular
	},
	secondary_body_regular_next: {
		...secondary_body_regular,
		marginTop: secondary_body_regular.lineHeight
	},

	secondary_body_light: {
		...secondary_body_light
	},
	secondary_body_light_next: {
		...secondary_body_light,
		marginTop: secondary_body_light.lineHeight
	},

	secondary_subtitle_regular: {
		...secondary_subtitle_regular
	},
	secondary_subtitle_regular_next: {
		...secondary_subtitle_regular,
		marginTop: secondary_subtitle_regular.lineHeight
	},


	secondary_caption_regular: {
		...secondary_caption_regular
	},
	secondary_caption_regular_next: {
		...secondary_caption_regular,
		marginTop: secondary_caption_regular.lineHeight
	}
}));

interface SpacingMap {
	[spacing: string]: string;
}

interface WeightMap {
	[weight: string]: SpacingMap;
}

interface ElementMap {
	[element: string]: WeightMap
}

interface ClassMap {
	[key: string]: ElementMap;
}

export default function Typography(props: Props) {
	const classes = useStyles();
	const {children, className, group, next, variant, weight} = props;

	const result = React.useMemo(() => {
		const classMap: ClassMap = {
			primary: {
				h1: {
					regular: {
						default: classes.primary_h1_regular,
						next: classes.primary_h1_regular_next,
					},
				},
				h2: {
					regular: {
						default: classes.primary_h2_regular,
						next: classes.primary_h2_regular_next
					},
				},
				h3: {
					regular: {
						default: classes.primary_h3_regular,
						next: classes.primary_h3_regular_next,
					},
					medium: {
						default: classes.primary_h3_medium,
						next: classes.primary_h3_medium_next,
					},
					semibold: {
						default: classes.primary_h3_semibold,
						next: classes.primary_h3_semibold_next,
					},
				},
				h4: {
					medium: {
						default: classes.primary_h4_medium,
						next: classes.primary_h4_medium_next,
					},
					semibold: {
						default: classes.primary_h4_semibold,
						next: classes.primary_h4_semibold_next
					},
				},
				body: {
					regular: {
						default: classes.primary_body_regular,
						next: classes.primary_body_regular_next
					},
					semibold: {
						default: classes.primary_body_semibold,
						next: classes.primary_body_semibold_next,
					}
				},
				subtitle: {
					regular: {
						default: classes.primary_subtitle_regular,
						next: classes.primary_subtitle_regular_next,
					}
				},
				caption: {
					regular: {
						default: classes.primary_caption_regular,
						next: classes.primary_caption_regular_next,
					}
				}
			},
			secondary: {
				h3: {
					light: {
						default: classes.secondary_h3_light,
						next: classes.secondary_h3_light_next,
					}
				},
				body: {
					light: {
						default: classes.secondary_body_light,
						next: classes.secondary_body_light_next
					},
					regular: {
						default: classes.secondary_body_regular,
						next: classes.secondary_body_regular_next,
					}
				},
				subtitle: {
					regular: {
						default: classes.secondary_subtitle_regular,
						next: classes.secondary_subtitle_regular_next,
					}
				},
				caption: {
					regular: {
						default: classes.secondary_caption_regular,
						next: classes.secondary_caption_regular_next,
					}
				}
			}
		};

		// If the user has said that this is the next paragraph, and a 'next' style has
		// been defined, use that; otherwise use the base version
		const thisGroup = group || 'primary';
		const thisVariant = variant || 'body';
		const thisWeight = weight || 'regular';
		const thisSpacing = (next) ? 'next' : 'default';

		const themeClass = classMap[thisGroup][thisVariant][thisWeight][thisSpacing];

		const thisClassName = (className)
			? `${themeClass} ${className}`
			: themeClass;

		switch (variant) {
			case 'h1':
				return <h1 className={thisClassName}>{children}</h1>
			case 'h2':
				return <h2 className={thisClassName}>{children}</h2>
			case 'h3':
				return <h3 className={thisClassName}>{children}</h3>
			case 'h4':
				return <h4 className={thisClassName}>{children}</h4>
			default:
				return <p className={thisClassName}>{children}</p>
		}
	}, [children, classes, className, group, next, variant, weight]);

	return (
		<React.Fragment>
			{result}
		</React.Fragment>
	);
};
