import * as React from 'react';
import {InputAdornment, TextField} from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface Props {
	disabled?: boolean;
	error?: boolean;
	helperText?: string;
	multiline?: boolean;
	placeholder?: any;
	rows?: any;
	value?: any;
	InputProps?: any;

}

export default function MyTextField(props: Props) {
	const {error} = props;

	if (error) {
		return (
			<TextField
				{...props}
				error
				fullWidth
				InputProps={{
					endAdornment: <InputAdornment position="end"><ErrorOutlineIcon/></InputAdornment>
				}}
			/>
		);
	}

	return (
		<TextField fullWidth {...props}/>
	);
};
