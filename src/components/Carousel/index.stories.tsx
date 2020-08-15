import * as React from 'react';
import Carousel from './index';

export default {title: 'Components/Carousel'};

export const _default = () => (<Carousel/>);

export const _with1Item = () => (
	<Carousel>
		<div>page 1</div>
	</Carousel>
);

export const _with2Items = () => (
	<Carousel>
		<div>page 1</div>
		<div>page 2</div>
	</Carousel>
);

export const _with3Items = () => (
	<Carousel>
		<div>page 1</div>
		<div>page 2</div>
		<div>page 3</div>
	</Carousel>
);