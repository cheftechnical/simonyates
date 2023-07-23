// import * as React from 'react';
// import {Container} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

import {Container} from "@mui/material";

interface Props {
	children: NonNullable<React.ReactNode>;
	className?: string | undefined;
	fullHeight?: boolean;
}

// const useStyles = makeStyles(() => ({
// 	fullHeight: {
// 		height: '100%'
// 	}
// }));

export default function MyContainer(props: Props) {
	// const classes = useStyles();
	const {children, className, fullHeight} = props;

	// const rootClassName = (fullHeight)
	// 	? `${classes.fullHeight} ${className}`
	// 	: className;

		// <Container className={className} disableGutters>
	// return (
	// 	<Container className={rootClassName}>
	// 		{children}
	// 	</Container>
	// );
	return (
		<Container>{children}</Container>
	)
};
