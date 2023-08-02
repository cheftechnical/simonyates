import * as React from 'react';
import {Button} from '@material-ui/core';

interface Props {
	children: string;
	className?: any;
	endIcon?: any;
	onClick?: any;
	type?: any;
}

export default function ButtonContained(props: Props) {
	const {children, className, endIcon, onClick, type} = props;

	return (
		<Button
			disableRipple
			className={className}
			endIcon={endIcon}
			onClick={onClick}
			type={type}
			variant="contained"
		>
			{children}
		</Button>
	);
};
