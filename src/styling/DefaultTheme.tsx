import * as React from 'react';
import {createMuiTheme, CssBaseline} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {CSSProperties} from '@material-ui/core/styles/withStyles';

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
import {color} from './Color';
import rem from './rem';

const apercuLight: CSSProperties = {
	fontFamily: 'Apercu Light',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	src: `
		local('Apercu Light'),
		url(${ApercuLightWoff}) format('woff')
	`
};

const apercuRegular: CSSProperties = {
	fontFamily: 'Apercu Regular',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	src: `
		local('Apercu Regular'),
		url(${ApercuRegularWoff}) format('woff')
	`
};

const tiemposTextRegular: CSSProperties = {
	fontFamily: 'Tiempos Text',
	fontStyle: 'normal',
	fontDisplay: 'swap', // @todo do i need this?
	src: `
		local('Tiempos Text'),
		local('Tiempos Text Test'),
		url(${TiemposTextRegularWoff}) format('woff')
	`,
};

const tiemposTextMedium: CSSProperties = {
	fontFamily: 'Tiempos Text Medium',
	fontStyle: 'normal',
	fontDisplay: 'swap', // @todo do i need this?
	src: `
		local('Tiempos Text Medium'),
		local('Tiempos Text Test Medium'),
		url(${TiemposTextMediumWoff}) format('woff')
	`,
};

const tiemposTextSemibold: CSSProperties = {
	fontFamily: 'Tiempos Text Semibold',
	fontStyle: 'normal',
	fontDisplay: 'swap', // @todo do i need this?
	src: `
		local('Tiempos Text Semibold'),
		local('Tiempos Text Test Semibold'),
		url(${TiemposTextSemiboldWoff}) format('woff')
	`,
};

const theme = createMuiTheme({
	overrides: {
		MuiButton: {
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

				'& .MuiButton-label': {
					paddingBottom: rem(6),
					borderBottom: `2px solid ${color.grey['50']}`
				},

				'&:hover': {
					backgroundColor: 'inherit',

					'& .MuiButton-label': {
						borderBottom: `2px solid ${color.grey[900]}`,
					},

					'& .MuiButton-label .MuiButton-endIcon': {
						paddingBottom: rem(6),
						marginBottom: '-8px',
						borderBottom: `2px solid ${color.grey['50']}`
					}
				},

				'&$disabled': {
					color: color.grey[300],
				},
			}
		},
		MuiChip: {
			root: {
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
					tiemposTextRegular,
					tiemposTextMedium,
					tiemposTextSemibold,
				]
			}
		},
		MuiLink: {
			root: {

			}
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

