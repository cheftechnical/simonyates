import * as React from 'react';
import {Chip} from '@material-ui/core';

export default {title: 'Style Guide/Chip'};

export const _default = () => <Chip label="elasticsearch"/>

export const _multipleChips = () => (
	<div>
		<Chip label="automation"/>
		<Chip label="custom tools"/>
		<Chip label="elasticsearch"/>
	</div>
)