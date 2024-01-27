import {Button} from "@mui/material";
// import {Button} from '@material-ui/core';

interface Props {
	children: string;
	className?: any;
	endIcon?: any;
	onClick?: any;
	type?: any;
}

export default function ButtonContained(props: Props) {
	// const {children, className, endIcon, onClick, type} = props;
	const {children} = props;

	// return (
	// 	<Button
	// 		disableRipple
	// 		className={className}
	// 		endIcon={endIcon}
	// 		onClick={onClick}
	// 		type={type}
	// 		variant="contained"
	// 	>
	// 		{children}
	// 	</Button>
	// );

	return (
		<Button>{children}</Button>
	)
};
