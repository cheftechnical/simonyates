// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import {Button} from '@material-ui/core';
import rem from '../../../../styling/rem';
import {styled} from "@mui/material";

interface Props {
	href: string;
	selected: boolean;
	title: string;
}

// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		paddingTop: themeMui.spacing(24 / 8)
// 	},
// 	active: {
// 		fontWeight: 'bold',
// 	},
// 	default: {
// 		fontSize: rem(24),
// 		lineHeight: rem(32),
//
// 		'& .MuiButton-label': {
// 			paddingBottom: 0
// 		}
// 	}
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
	paddingTop: theme.spacing(24 / 8)
}))

export default function MenuItem(props: Props) {
	// const classes = useStyles();
	const {href, selected, title} = props;

	// @todo mui5
	// if (selected) {
	// 	return (
	// 		<StyledDivRoot>
	// 			<Button disableRipple className={`${classes.default} ${classes.active}`} color="secondary" href={href}>
	// 				{title}
	// 			</Button>
	// 		</StyledDivRoot>
	// 	);
	// }
	//
	// return (
	// 	<StyledDivRoot>
	// 		<Button disableRipple className={classes.default} color="secondary" href={href}>
	// 			{title}
	// 		</Button>
	// 	</StyledDivRoot>
	// );

	return (
		<div>[MenuItem]</div>
	)
}