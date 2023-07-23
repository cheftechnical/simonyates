import * as React from 'react';
import {TextField} from "@mui/material";
// import {InputAdornment, TextField} from '@material-ui/core';
// import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface Props {
	error?: boolean;
	InputProps?: any;
	[key: string]: any;

}

/**
 * @deprecated use MyTextField2
 *
 * @param props
 * @constructor
 */
export default function MyTextField(props: Props) {
	// const {error, InputProps} = props;

	// if (error) {
	// 	return (
	// 		<TextField
	// 			{...props}
	// 			error
	// 			fullWidth
	// 			InputProps={{
	// 				...InputProps,
	// 				endAdornment: <InputAdornment position="end"><ErrorOutlineIcon/></InputAdornment>
	// 			}}
	// 		/>
	// 	);
	// }
	//
	// return (
	// 	<TextField fullWidth {...props}/>
	// );

	return (
		<TextField/>
	)
};
