/***********************************************************************************************************************
 * Apercu
 * @source: https://www.colophon-foundry.org
 * @license: Purchased 2020-08-01
 **********************************************************************************************************************/
import {s3BasePath} from "./config";
import {CSSProperties} from "@mui/material/styles/createMixins";

// ---[ Apercu | 300 | Light ]--------------------------------------------------------------------------------------------------
const ApercuLightWoff = `${s3BasePath}/apercu/apercu-light-web/web/apercu-light.woff`;
const ApercuLightWoff2 = `${s3BasePath}/apercu/apercu-light-web/web/apercu-light.woff2`;

// ---[ Apercu | 300 | Light Italic ]-------------------------------------------------------------------------------------------
const ApercuLightItalicWoff = `${s3BasePath}/apercu/apercu-light-italic-web/web/apercu-light-italic.woff`;
const ApercuLightItalicWoff2 = `${s3BasePath}/apercu/apercu-light-italic-web/web/apercu-light-italic.woff2`;

// ---[ Apercu | 400 | Regular ]------------------------------------------------------------------------------------------------
const ApercuRegularWoff = `${s3BasePath}/apercu/apercu-regular-web/web/apercu-regular.woff`;
const ApercuRegularWoff2 = `${s3BasePath}/apercu/apercu-regular-web/web/apercu-regular.woff2`;

// ---[ Apercu | 400 | Regular Italic ]-------------------------------------------------------------------------------------------------
const ApercuRegularItalicWoff = `${s3BasePath}/apercu/apercu-italic-web/web/apercu-italic.woff`;
const ApercuRegularItalicWoff2 = `${s3BasePath}/apercu/apercu-italic-web/web/apercu-italic.woff2`;

// ---[ Apercu | 700 | Bold ]-------------------------------------------------------------------------------------------
const ApercuBoldWoff = `${s3BasePath}/apercu/apercu-bold-web/web/apercu-bold.woff`;
const ApercuBoldWoff2 = `${s3BasePath}/apercu/apercu-bold-web/web/apercu-bold.woff2`;

// ---[ Apercu | 700 | Bold Italic ]------------------------------------------------------------------------------------
// @todo buy Apercu Bold Italic


export const apercu = `"Apercu"`;

// Apercu | 300 | Light
export const apercuLight: CSSProperties = {
  fontFamily: apercu,
  fontStyle: 'normal',
  fontWeight: 300,
  // fontDisplay: 'fallback',
  src: `
		url(${ApercuLightWoff2}) format('woff2'),
		url(${ApercuLightWoff}) format('woff')
	`
};

// Apercu | 300 | Light Italic
export const apercuLightItalic: CSSProperties = {
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
export const apercuRegular: CSSProperties = {
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
export const apercuRegularItalic: CSSProperties = {
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
export const apercuBold: CSSProperties = {
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