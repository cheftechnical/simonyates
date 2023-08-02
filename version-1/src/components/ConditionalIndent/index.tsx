import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../styling/rem';
import {useMediaQuery, useTheme} from '@material-ui/core';

interface Props {
	children?: any;
	className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	rootDesktop: {
		paddingLeft: rem(40),
	},

	rootMobile: {
		paddingLeft: 0
	},
}));

export default function ConditionalIndent(props: Props) {
	const theme = useTheme();
	const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

	const classes = useStyles();
	const {children, className} = props;

	const rootClassName = (matchesSm)
		? `${classes.rootMobile} ${className}`
		: `${classes.rootDesktop} ${className}`;

	return (
		<div className={rootClassName}>{children}</div>
	);
};