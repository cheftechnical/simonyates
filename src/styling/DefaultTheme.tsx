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


