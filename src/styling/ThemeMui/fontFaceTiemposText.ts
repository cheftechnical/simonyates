/***********************************************************************************************************************
 * Tiempos Text
 * @source: https://klim.co.nz/
 * @licence: Purchased 2020-08-01
 **********************************************************************************************************************/
import {s3BasePath} from "./config";
import {CSSProperties} from "@mui/material/styles/createMixins";

// ---[ Tiempos Text | 400 | Regular ]----------------------------------------------------------------------------------
const TiemposTextRegularWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-regular.woff`;
const TiemposTextRegularWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-regular.woff2`;
const TiemposTextRegularWoffLocal = `/fonts/tiempos-text-web/tiempos-text-web-regular.woff`;
const TiemposTextRegularWoff2Local = `/fonts/tiempos-text-web/tiempos-text-web-regular.woff2`;

// ---[ Tiempos Text | 400 | Regular Italic ]---------------------------------------------------------------------------
const TiemposTextRegularItalicWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-regular-italic.woff`;
const TiemposTextRegularItalicWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-regular-italic.woff2`;

// ---[ Tiempos Text | 500 | Medium ]-----------------------------------------------------------------------------------
const TiemposTextMediumWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-medium.woff`;
const TiemposTextMediumWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-medium.woff2`;

// ---[ Tiempos Text | 500 | Medium Italic ]----------------------------------------------------------------------------
const TiemposTextMediumItalicWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-medium-italic.woff`;
const TiemposTextMediumItalicWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-medium-italic.woff2`;

// ---[ Tiempos Text | 600 | Semibold ]---------------------------------------------------------------------------------
const TiemposTextSemiboldWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-semibold.woff`;
const TiemposTextSemiboldWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-semibold.woff2`;

// ---[ Tiempos Text | 600 | Semibold Italic ]--------------------------------------------------------------------------
const TiemposTextSemiboldItalicWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-semibold-italic.woff`;
const TiemposTextSemiboldItalicWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-semibold-italic.woff2`;

// ---[ Tiempos Text | 700 | Bold ]-------------------------------------------------------------------------------------
const TiemposTextBoldWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-bold.woff`;
const TiemposTextBoldWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-bold.woff2`;

// ---[ Tiempos Text | 700 | Bold Italic ]------------------------------------------------------------------------------
const TiemposTextBoldItalicWoff = `${s3BasePath}/tiempos-text-web/tiempos-text-web-bold-italic.woff`;
const TiemposTextBoldItalicWoff2 = `${s3BasePath}/tiempos-text-web/tiempos-text-web-bold-italic.woff2`;

// ----[ Tiempos Text ]-------------------------------------------------------------------------------------------------

const tiemposTextFallback: string = `"Times New Roman", Times, serif`;
export const tiemposText: string = `"Tiempos Text", ${tiemposTextFallback}`;

// Tiempos Text | 400 | Regular
export const tiemposTextRegular: CSSProperties = {
	fontFamily: tiemposText,
	fontWeight: 'normal',
	fontStyle: 'normal',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextRegularWoff2}) format('woff2'),
		url(${TiemposTextRegularWoff}) format('woff'),
		
		url(${TiemposTextRegularWoff2Local}) format('woff2')
		url(${TiemposTextRegularWoffLocal}) format('woff'),
	`,
};

// Tiempos Text | 400 | Regular Italic
export const tiemposTextRegularItalic: CSSProperties = {
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
export const tiemposTextMedium: CSSProperties = {
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
export const tiemposTextMediumItalic: CSSProperties = {
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
export const tiemposTextSemibold: CSSProperties = {
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
export const tiemposTextSemiboldItalic: CSSProperties = {
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
export const tiemposTextBold: CSSProperties = {
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
export const tiemposTextBoldItalic: CSSProperties = {
	fontFamily: tiemposText,
	fontStyle: 'italic',
	fontWeight: 'bold',
	fontDisplay: 'fallback',
	src: `
		url(${TiemposTextBoldItalicWoff2} format('woff2'),
		url(${TiemposTextBoldItalicWoff} format('woff')
	`,
}