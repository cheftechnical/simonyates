import * as React from 'react';
import {createMuiTheme, CssBaseline} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {CSSProperties} from '@material-ui/core/styles/withStyles';
import {color} from './Color';
import rem from './rem';

// @ts-ignore
import TiemposTextBoldWoff from './fonts/tiempos-text/tiempos-text-test-bold.woff';
// @ts-ignore
import TiemposTextRegularWoff from './fonts/tiempos-text/tiempos-text-test-regular.woff';
// @ts-ignore
import TiemposTextMediumWoff from './fonts/tiempos-text/tiempos-text-test-medium.woff';
// @ts-ignore
import TiemposTextSemiboldWoff from './fonts/tiempos-text/tiempos-text-test-semibold.woff';
// @ts-ignore
import ApercuLightWoff from './fonts/apercu/apercu_light-webfont.woff';
// @ts-ignore
import ApercuRegularWoff from './fonts/apercu/apercu_regular-webfont.woff';

const apercuLight: CSSProperties = {
	fontFamily: 'Apercu Light',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		local('Apercu Light'),
		url(${ApercuLightWoff}) format('woff')
	`
};

const apercuRegular: CSSProperties = {
	fontFamily: 'Apercu Regular',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		local('Apercu Regular'),
		url(${ApercuRegularWoff}) format('woff')
	`
};

const tiemposTextBold: CSSProperties = {
	fontFamily: '"Tiempos Text Bold"',
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontDisplay: 'fallback',
	src: `
		local('Tiempos Text Bold'),
		local('Tiempos Text Test Bold'),
		url(${TiemposTextBoldWoff} format('woff')
	`,
};

const tiemposTextRegular: CSSProperties = {
	fontFamily: 'Tiempos Text',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		local('Tiempos Text'),
		local('Tiempos Text Test'),
		url(${TiemposTextRegularWoff}) format('woff')
	`,
};

const tiemposTextMedium: CSSProperties = {
	fontFamily: 'Tiempos Text Medium',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		local('Tiempos Text Medium'),
		local('Tiempos Text Test Medium'),
		url(${TiemposTextMediumWoff}) format('woff')
	`,
};

const tiemposTextSemibold: CSSProperties = {
	fontFamily: 'Tiempos Text Semibold',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		local('Tiempos Text Semibold'),
		local('Tiempos Text Test Semibold'),
		url(${TiemposTextSemiboldWoff}) format('woff')
	`,
};

const theme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1032,   // custom: to match figma
			xl: 1920,
		},
	},
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 0,
			},
			endIcon: {
				marginLeft: rem(8)
			},
			contained: {
				padding: rem(16),

				fontFamily: '"Tiempos Text Medium"',
				fontStyle: 'normal',
				fontWeight: 500,
				fontSize: rem(16),
				lineHeight: rem(16),
				letterSpacing: rem(1.25),
				textTransform: 'uppercase',

				color: color.grey['50'],
				backgroundColor: color.grey['900'],

				boxShadow: 'none',

				'&:active': {
					color: color.grey['900'],
					boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,
				},

				'&:hover': {
					color: color.grey['900'],
					backgroundColor: color.grey['50'],
					boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,
				},

				'&$disabled': {
					color: color.grey['50'],
					backgroundColor: color.grey['300'],
				}
			},
			text: {
				padding: 0,
				fontFamily: '"Tiempos Text"',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: rem(14),
				lineHeight: rem(16),
				letterSpacing: rem(1.25),
				textTransform: 'uppercase',

				color: color.grey[900],

				minWidth: 'inherit',

				'& .MuiButton-endIcon': {
					marginLeft: rem(0)
				},

				'& .MuiButton-label': {
					paddingBottom: rem(6),
					borderBottom: `2px solid ${color.white}`
					// borderBottom: `2px solid cyan`

				},

				'&:hover': {
					backgroundColor: 'inherit',

					'& .MuiButton-label': {
						borderBottom: `2px solid ${color.grey[900]}`,
						// borderBottom: `2px solid magenta`,
					},

					'& .MuiButton-label .MuiButton-endIcon': {
						paddingBottom: rem(6),
						marginBottom: '-8px',
						borderBottom: `2px solid ${color.white}`
					}
				},

				'&$disabled': {
					color: color.grey[300],
				},
			}
		},
		MuiChip: {
			root: {
				marginRight: rem(8),

				fontFamily: '"Apercu Regular"',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: rem(14),
				lineHeight: rem(16),
				letterSpacing: rem(0.25),
				color: color.grey['800'],

				backgroundColor: color.lime['50'],
				borderWidth: 1.5,
				borderStyle: 'solid',
				borderColor: color.lime['300'],
			}
		},
		MuiCssBaseline: {
			'@global': {
				'@font-face': [
					apercuLight,
					apercuRegular,
					tiemposTextBold,
					tiemposTextMedium,
					tiemposTextRegular,
					tiemposTextSemibold,
				],
				html: {
					scrollBehavior: 'smooth',
					// scrollPaddingTop: '70px',
				},
				'html,body': {
					height: '100%'
				},
				'#root': {
					height: '100%'
				},
				'ul': {
					marginLeft: '0px',
					paddingLeft: '15px',
				},
			},
		},
		MuiLink: {
			root: {

			}
		},
		MuiInput: {
			underline: {
				// Indent the value of the text field
				paddingTop: rem(10),
				paddingBottom: rem(12),
				paddingLeft: rem(16),
				paddingRight: rem(16),


				// border of active state
				'&:after': {
					borderBottomColor: color.lime['500']
				},

				// border of hover state
				'&:hover:not(.Mui-disabled):before': {
					borderBottomColor: color.grey['900']
				},

				// border of inactive state
				'&:before': {
					borderBottomWidth: '2px',
					borderBottomStyle: 'solid',
					borderBottomColor: color.grey['200']
				},

				// disabled state
				'&$disabled': {
					color: color.grey['200'],

					'&:before': {
						borderBottomStyle: 'solid',
						borderBottomColor: color.grey['200']
					}
				},

				'&$error': {
					'& .MuiInputBase-input': {
						color: color.red['500']
					},
					'& .MuiInputAdornment-root': {
						color: color.red['500']
					}
				},

				'&$error:after': {
					borderBottomColor: color.red['500']
				}
			}
		},
		MuiFormHelperText: {
			root: {
				paddingLeft: rem(16),
				paddingRight: rem(16),
				color: color.grey['900'],

				'&$disabled': {
					color: color.grey['200'],
				},

				'&$error': {
					color: color.red['500']
				}
			},
		},
		MuiTextField: {
			root: {
				marginBottom: rem(24), // this creates a vertical space between components
			}
		}
	},
	palette: {
		background: {
			default: color.white
		}
	},
	typography: {
		fontFamily: '"Tiempos Text"'
	}
});

interface Props {
	// children: Element | (string | Element)[];
	children: any;
}

export default function DefaultTheme(props: Props) {
	const {children} = props;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			{children}
		</ThemeProvider>
	);
};


