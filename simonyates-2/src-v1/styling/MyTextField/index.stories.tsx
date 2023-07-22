import * as React from 'react';
import {InputAdornment} from '@material-ui/core';
import MyTextField from './index';

export default {title: 'Style Guide/MyTextField'};

export const _default = () => (
	<MyTextField
		value="Default"
	/>
);

export const _disabled = () => (
	<MyTextField
		disabled
		value="Disabled"
	/>
);

export const _withError = () => (
	<MyTextField
		error
		helperText="Helper text"
		InputProps={{
			endAdornment: <InputAdornment position="end">Kg</InputAdornment>
		}}
		value="Error"
	/>
);

export const _withHelper = () => (
	<MyTextField
		helperText="Help text"
		value="Disabled"
	/>
);

export const _withHelperDisabled = () => (
	<MyTextField
		disabled
		helperText="Help text"
		value="Disabled"
	/>
);