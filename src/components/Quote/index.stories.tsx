import * as React from 'react';
import Quote from './index';

export default {title: 'Components/Quote'};

export const _default = () => (
	<Quote>
		I do appreciate the good work you&rsquo;ve done. I am very pleased with the application and your coding. Logical. Commented. Made it much easier to go through.
	</Quote>
);

export const _withSource = () => (
	<Quote source="Alain Brisard, Web Communications Producer, Apple Canada Inc.">
		I do appreciate the good work you&rsquo;ve done. I am very pleased with the application and your coding. Logical. Commented. Made it much easier to go through.
	</Quote>
);