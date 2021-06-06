import * as React from 'react';
import {createMuiTheme, CssBaseline} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {CSSProperties} from '@material-ui/core/styles/withStyles';
import {color} from './Color';
import rem from './rem';





/***********************************************************************************************************************
 * Apercu
 * @source: https://www.colophon-foundry.org
 * @license: Purchased 2020-08-01
 **********************************************************************************************************************/

// ---[ Apercu | 300 | Light ]--------------------------------------------------------------------------------------------------
// @ts-ignore
import ApercuLightWoff from './fonts/apercu/apercu-light-web/web/apercu-light.woff';
// @ts-ignore
import ApercuLightWoff2 from './fonts/apercu/apercu-light-web/web/apercu-light.woff2';


// ---[ Apercu | 300 | Light Italic ]-------------------------------------------------------------------------------------------
// @ts-ignore
import ApercuLightItalicWoff from './fonts/apercu/apercu-light-italic-web/web/apercu-light-italic.woff';
// @ts-ignore
import ApercuLightItalicWoff2 from './fonts/apercu/apercu-light-italic-web/web/apercu-light-italic.woff2';


// ---[ Apercu | 400 | Regular ]------------------------------------------------------------------------------------------------
// @ts-ignore
import ApercuRegularWoff from './fonts/apercu/apercu-regular-web/web/apercu-regular.woff';
// @ts-ignore
import ApercuRegularWoff2 from './fonts/apercu/apercu-regular-web/web/apercu-regular.woff2';


// ---[ Apercu | 400 | Regular Italic ]-------------------------------------------------------------------------------------------------
// @ts-ignore
import ApercuRegularItalicWoff from './fonts/apercu/apercu-italic-web/web/apercu-italic.woff';
// @ts-ignore
import ApercuRegularItalicWoff2 from './fonts/apercu/apercu-italic-web/web/apercu-italic.woff2';


// ---[ Apercu | 700 | Bold ]-------------------------------------------------------------------------------------------
// @ts-ignore
import ApercuBoldWoff from './fonts/apercu/apercu-bold-web/web/apercu-bold.woff';
// @ts-ignore
import ApercuBoldWoff2 from './fonts/apercu/apercu-bold-web/web/apercu-bold.woff2';


// ---[ Apercu | 700 | Bold Italic ]------------------------------------------------------------------------------------
// @todo buy Apercu Bold Italic





/***********************************************************************************************************************
 * Tiempos Text
 * @source: https://klim.co.nz/
 * @licence: Purchased 2020-08-01
 **********************************************************************************************************************/


// ---[ Tiempos Text | 400 | Regular ]----------------------------------------------------------------------------------
// @ts-ignore
import TiemposTextRegularWoff from './fonts/tiempos-text-web/tiempos-text-web-regular.woff';
// @ts-ignore
import TiemposTextRegularWoff2 from './fonts/tiempos-text-web/tiempos-text-web-regular.woff2';


// ---[ Tiempos Text | 400 | Regular Italic ]---------------------------------------------------------------------------
// @ts-ignore
import TiemposTextRegularItalicWoff from './fonts/tiempos-text-web/tiempos-text-web-regular-italic.woff';
// @ts-ignore
import TiemposTextRegularItalicWoff2 from './fonts/tiempos-text-web/tiempos-text-web-regular-italic.woff2';


// ---[ Tiempos Text | 500 | Medium ]-----------------------------------------------------------------------------------
// @ts-ignore
import TiemposTextMediumWoff from './fonts/tiempos-text-web/tiempos-text-web-medium.woff';
// @ts-ignore
import TiemposTextMediumWoff2 from './fonts/tiempos-text-web/tiempos-text-web-medium.woff2';


// ---[ Tiempos Text | 500 | Medium Italic ]----------------------------------------------------------------------------
// @ts-ignore
import TiemposTextMediumItalicWoff from './fonts/tiempos-text-web/tiempos-text-web-medium-italic.woff';
// @ts-ignore
import TiemposTextMediumItalicWoff2 from './fonts/tiempos-text-web/tiempos-text-web-medium-italic.woff2';


// ---[ Tiempos Text | 600 | Semibold ]---------------------------------------------------------------------------------
// @ts-ignore
import TiemposTextSemiboldWoff from './fonts/tiempos-text-web/tiempos-text-web-semibold.woff';
// @ts-ignore
import TiemposTextSemiboldWoff2 from './fonts/tiempos-text-web/tiempos-text-web-semibold.woff2';


// ---[ Tiempos Text | 600 | Semibold Italic ]--------------------------------------------------------------------------
// @ts-ignore
import TiemposTextSemiboldItalicWoff from './fonts/tiempos-text-web/tiempos-text-web-semibold-italic.woff';
// @ts-ignore
import TiemposTextSemiboldItalicWoff2 from './fonts/tiempos-text-web/tiempos-text-web-semibold-italic.woff2';


// ---[ Tiempos Text | 700 | Bold ]-------------------------------------------------------------------------------------
// @ts-ignore
import TiemposTextBoldWoff from './fonts/tiempos-text-web/tiempos-text-web-bold.woff';
// @ts-ignore
import TiemposTextBoldWoff2 from './fonts/tiempos-text-web/tiempos-text-web-bold.woff2';


// ---[ Tiempos Text | 700 | Bold Italic ]------------------------------------------------------------------------------
// @ts-ignore
import TiemposTextBoldItalicWoff from './fonts/tiempos-text-web/tiempos-text-web-bold-italic.woff';
// @ts-ignore
import TiemposTextBoldItalicWoff2 from './fonts/tiempos-text-web/tiempos-text-web-bold-italic.woff2';




// ---[ Apercu ]--------------------------------------------------------------------------------------------------------

const apercu = `"Apercu"`;

// Apercu | 300 | Light
const apercuLight: CSSProperties = {
	fontFamily: apercu,
	fontStyle: 'normal',
	fontWeight: 300,
	fontDisplay: 'fallback',
	src: `
		url(${ApercuLightWoff2}) format('woff2'),
		url(${ApercuLightWoff}) format('woff')
	`
};

// Apercu | 300 | Light Italic
const apercuLightItalic: CSSProperties = {
	fontFamily: apercu,
	fontStyle: 'italic',
	fontWeight: 300,
	fontDisplay: 'fallback',
	src: `
		url(${ApercuLightItalicWoff2}) format('woff2'),
		url(${ApercuLightItalicWoff}) format('woff')
	`
};

// Apercu | 400 | Regular
const apercuRegular: CSSProperties = {
	fontFamily: apercu,
	fontStyle: 'normal',
	fontWeight: 'normal',
	fontDisplay: 'fallback',
	src: `
		url(${ApercuRegularWoff2}) format('woff2'),
		url(${ApercuRegularWoff}) format('woff')
	`
};

// Apercu | 400 | Regular Italic
const apercuRegularItalic: CSSProperties = {
	fontFamily: apercu,
	fontStyle: 'italic',
	fontWeight: 'normal',
	fontDisplay: 'fallback',
	src: `
		url(${ApercuRegularItalicWoff2}) format('woff2'),
		url(${ApercuRegularItalicWoff}) format('woff')
	`
};

// Apercu | 700 | Bold
const apercuBold: CSSProperties = {
	fontFamily: apercu,
	fontStyle: 'normal',
	fontWeight: 700,
	fontDisplay: 'fallback',
	src: `
		url(${ApercuBoldWoff2}) format('woff2'),
		url(${ApercuBoldWoff}) format('woff')
	`
};

// Apercu | 700 | Bold Italic
// @todo apercuBoldItalic





// ----[ Tiempos Text ]-------------------------------------------------------------------------------------------------

const tiemposText = `"Tiempos Text"`

// Tiempos Text | 400 | Regular
const tiemposTextRegular: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 'normal',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextRegularWoff2}) format('woff2'),
		url(${TiemposTextRegularWoff}) format('woff')
	`,
};

// Tiempos Text | 400 | Regular Italic
const tiemposTextRegularItalic: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 'normal',
	fontStyle: 'italic',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextRegularItalicWoff2}) format('woff2'),
		url(${TiemposTextRegularItalicWoff}) format('woff')	
	`
};

// Tiempos Text | 500 | Medium
const tiemposTextMedium: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 500,
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextMediumWoff2}) format('woff2'),
		url(${TiemposTextMediumWoff}) format('woff')
	`,
};

// Tiempos Text | 500 | Medium Italic
const tiemposTextMediumItalic: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 500,
	fontStyle: 'italic',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextMediumItalicWoff2}) format('woff2'),
		url(${TiemposTextMediumItalicWoff}) format('woff')
	`,
};

// Tiempos Text | 600 | Semibold
const tiemposTextSemibold: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 600,
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextSemiboldWoff2}) format('woff2'),
		url(${TiemposTextSemiboldWoff}) format('woff'),
	`,
};

// Tiempos Text | 600 | Semibold Italic
const tiemposTextSemiboldItalic: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 600,
	fontStyle: 'italic',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextSemiboldItalicWoff2}) format('woff2'),
		url(${TiemposTextSemiboldItalicWoff}) format('woff'),
	`,
};

// Tiempos Text | 700 | Bold
const tiemposTextBold: CSSProperties = {
	fontFamily: tiemposText,
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextBoldWoff2} format('woff2'),
		url(${TiemposTextBoldWoff} format('woff')
	`,
};

// Tiempos Text | 700 | Bold Italic
const tiemposTextBoldItalic: CSSProperties = {
	fontFamily: tiemposText,
	fontStyle: 'italic',
	fontWeight: 'bold',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextBoldItalicWoff2} format('woff2'),
		url(${TiemposTextBoldItalicWoff} format('woff')
	`,
}

const containerPaddingLeft = 22;
// const containerPaddingLeft = 0;
const containerPaddingRight = 22;
// const containerPaddingRight = 0;


/***********************************************************************************************************************
 * Define the theme
 /*********************************************************************************************************************/
const theme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1032 + (containerPaddingLeft/1) + (containerPaddingRight/1),   // custom: to match figma
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

				fontFamily: tiemposText,
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
					backgroundColor: color.grey['50'],
					boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,

					'@media (hover: none)': {
						color: color.grey['900'],
						backgroundColor: color.grey['50'],
						boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,
					}
				},

				'&:hover': {
					color: color.grey['900'],
					backgroundColor: color.grey['50'],
					boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,

					'@media (hover: none)': {
						color: color.grey['900'],
						backgroundColor: color.grey['50'],
						boxShadow: `inset 0px 0px 0px 2px ${color.grey[900]}`,
					}
				},

				'&$disabled': {
					color: color.grey['50'],
					backgroundColor: color.grey['300'],

					'@media (hover: none)': {
						color: color.grey['50'],
						backgroundColor: color.grey['300'],
					}
				},
			},
			text: {
				padding: 0,
				fontFamily: tiemposText,
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
				},

				'&:hover': {
					backgroundColor: 'inherit',

					'& .MuiButton-label': {
						borderBottom: `2px solid ${color.grey[900]}`,
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

				'&$textSecondary': {
					color: color.grey['100'],

					'& .MuiButton-label': {
						borderBottom: `2px solid ${color.grey['900']}`
					},

					'&:hover': {
						'& .MuiButton-label': {
							borderBottom: `2px solid ${color.grey['100']}`
						},
					}
				}
			}
		},
		MuiChip: {
			root: {
				marginRight: rem(8),

				fontFamily: apercu,
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
		MuiContainer: {
			root: {
				paddingLeft: rem(containerPaddingLeft),
				paddingRight: rem(containerPaddingRight),
			}
		},
		MuiCssBaseline: {
			'@global': {
				'@font-face': [
					// Apercu
					apercuBold,
					apercuRegularItalic,
					apercuLight,
					apercuLightItalic,
					apercuRegular,

					// Tiempos
					tiemposTextRegular,
					tiemposTextRegularItalic,

					tiemposTextMedium,
					tiemposTextMediumItalic,

					tiemposTextSemibold,
					tiemposTextSemiboldItalic,

					tiemposTextBold,
					tiemposTextBoldItalic,
				],
				html: {
					scrollBehavior: 'smooth',
				},
				'html,body': {
					height: '100%'
				},
				'#root': {
					height: '100%'
				},
				'ul': {
					marginTop: 0,
					marginLeft: '0px',
					paddingLeft: '15px',
				},
			},
		},
		MuiLinearProgress: {
			colorPrimary: {
				 backgroundColor: color.grey['200'],
			},
			barColorPrimary: {
				backgroundColor: color.grey['900'],
			}
		},
		MuiLink: {
			root: {
				color: color.blue['500'],

				'&:hover': {
					color: color.blue['800']
				}
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
		fontFamily: tiemposText
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


