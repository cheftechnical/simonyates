// import * as React from 'react';
import Typography from '../../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';
import {styled} from "@mui/material";

interface Props {
	children?: any;
	host: string;
	next?: boolean;
	when: string;
	title: string;
}

// @todo mui5
// const useStyles = makeStyles((theme) => ({
// 	root: {
//
// 	},
// 	rootNext: {
// 		paddingTop: theme.spacing(40 / 8)
// 	},
// 	host: {
// 		paddingTop: theme.spacing(16 / 8),
// 		color: color.grey['600']
// 	},
// 	when: {
// 		color: color.grey['600']
// 	}
// }));

const StyledTypographyHost = styled(Typography)(({theme}) => ({
	paddingTop: theme.spacing(16 / 8),
	color: color.grey['600']
}));

const StyledTypographyWhen = styled(Typography)(({theme}) => ({
	color: color.grey['600']
}))

export default function FeaturedEvent(props: Props) {
	// const classes = useStyles();
	const {children, host, next, title, when} = props;

	// @todo mui5
	// const rootClass = (next)
	// 	? `${classes.root} ${classes.rootNext}`
	// 	: classes.root;

	// @todo mui5
	// return (
	// 	<div className={rootClass}>
	// 		<Typography group="primary" component="h3" variant="h4" weight="medium">
	// 			{title}
	// 		</Typography>
	//
	// 		<StyledTypographyHost group="primary" variant="body" weight="regular">
	// 			{host}
	// 		</StyledTypographyHost>
	//
	// 		<StyledTypographyWhen group="primary" variant="body" weight="regular">
	// 			{when}
	// 		</StyledTypographyWhen>
	//
	// 		<div>
	// 			{children}
	// 		</div>
	// 	</div>
	// );

	return (
		<div>[FeaturedEvent]</div>
	)
};