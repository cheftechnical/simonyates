// import * as React from 'react';
// import {Button} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';

interface Props {
	href: string;
	selected: boolean;
	title: string;
}
// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	active: {
// 		fontWeight: 'bold',
// 	},
// 	button: {
// 		marginLeft: themeMui.spacing((40-16)/8)
// 	}
// }));

export default function Item(_props: Props) {
	// const classes = useStyles();
	// const {href, selected, title} = props;

	// if (selected) {
	// 	return (
	// 		<Button disableRipple className={`${classes.button} ${classes.active}`} href={href}>{title}</Button>
	// 	);
	// }
	//
	// return (
	// 	<Button disableRipple className={classes.button} href={href}>{title}</Button>
	// );

	return (
		<div>[Item]</div>
	)
};
