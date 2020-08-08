import * as React from 'react';
import {useMediaQuery, useTheme} from '@material-ui/core';
import ForMobile from './ForMobile';
import ForDesktop from './ForDesktop';

interface Props {
	selected?: string;
}

export default function NavTop(props: Props) {
	const {selected} = props;

	const theme = useTheme();
	const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
	// const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

	if (matchesXs) {
		return (
			<ForMobile selected={selected}/>
		);
	}

	return (
		<ForDesktop selected={selected}/>
	);
};
