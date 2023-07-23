import * as React from 'react';
import Typography from '../../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';
import FeaturedChips from './FeaturedChips';
import {styled} from "@mui/material";

interface Props {
	children: any | any[] | never[];
	name: string;
	next?: boolean;
	publisher: string;
	tags: string[];
	when: string;
}

// @todo mui5
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 	},
// 	rootNext: {
// 		paddingTop: theme.spacing(40/8),
// 	},
// 	name: {
// 		marginBottom: theme.spacing(16/8),
// 	},
// 	when: {
// 		color: color.grey['600'],
// 	},
// 	children: {
// 		color: color.grey['700']
// 	},
// 	publisher: {
// 		color: color.grey['600'],
// 	}
// }));

const StyledDivChildren = styled('div')(({theme}) => ({
	color: color.grey['700']
}))

const StyledTypographyName = styled(Typography)(({theme}) => ({
	marginBottom: theme.spacing(16/8),
}))

const StyledTypographyPublisher = styled(Typography)(({theme}) => ({
	color: color.grey['600'],
}))

const StyledTypographyWhen = styled(Typography)(({theme}) => ({
	color: color.grey['600'],
}))

export default function FeaturedPublication(props: Props) {
	// const classes = useStyles();
	const {children, name, next, publisher, tags, when} = props;

	// @todo mui5
	// const rootClass = (next)
	// 	? `${classes.root} ${classes.rootNext}`
	// 	: classes.root;

	// @todo mui5
	// return (
	// 	<div className={rootClass}>
	// 		<StyledTypographyName component="h3" group="primary" variant="h4" weight="medium">
	// 			{name}
	// 		</StyledTypographyName>
	//
	// 		<StyledTypographyPublisher group="primary" variant="body" weight="regular">
	// 			{publisher}
	// 		</StyledTypographyPublisher>
	//
	// 		<StyledTypographyWhen group="primary" variant="body" weight="regular">
	// 			{when}
	// 		</StyledTypographyWhen>
	//
	// 		<FeaturedChips list={tags}/>
	//
	// 		<div className={classes.children}>
	// 			{children}
	// 		</div>
	// 	</div>
	// );

	return (
		<div>[FeaturedPublication]</div>
	)
}