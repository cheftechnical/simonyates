// import * as React from 'react';
// import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../styling/rem';
import {styled} from "@mui/material";
// import {useMediaQuery, useTheme} from '@material-ui/core';

interface Props {
	children?: any;
	className?: string;
}

// @todo mui5
// const useStyles = makeStyles((themeMui: Theme) => ({
// 	rootDesktop: {
// 		paddingLeft: rem(40),
// 	},
//
// 	rootMobile: {
// 		paddingLeft: 0
// 	},
// }));

const StyledDiv = styled('div')(({theme}) => ({
	// desktop (default)
	paddingLeft: rem(40),

	[theme.breakpoints.down('sm')]: {
		// for mobile
		paddingLeft: 0
	},
}));

export default function ConditionalIndent(props: Props) {
	// const themeMui = useTheme();
	// const matchesSm = useMediaQuery(themeMui.breakpoints.down('sm'));

	// const classes = useStyles();
	const {children, className} = props;

	// const rootClassName = (matchesSm)
	// 	? `${classes.rootMobile} ${className}`
	// 	: `${classes.rootDesktop} ${className}`;

	return (
		<StyledDiv>{children}</StyledDiv>
	);
};