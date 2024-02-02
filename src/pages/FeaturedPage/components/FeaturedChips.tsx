// import * as React from 'react';
// import {Chip} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import {Chip, styled} from "@mui/material";

interface Props {
	list: string[];
}

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
// 	chips: {
// 		paddingTop: themeMui.spacing(24 / 8),
// 		paddingBottom: themeMui.spacing(24 / 8),
// 		lineHeight: rem(48 - 4), // less 4 for the border thickness
// 	},
// }));

const StyledDivChips = styled('div')(({theme}) => ({
	paddingTop: theme.spacing(24 / 8),
	paddingBottom: theme.spacing(24 / 8),
	lineHeight: rem(48 - 4), // less 4 for the border thickness
}))

export default function FeaturedChips(props: Props) {
	// const classes = useStyles();
	const {list} = props;

	return (
		<StyledDivChips>
			{list.map((item, index) => (
				<Chip key={index} label={item}/>
			))}
		</StyledDivChips>
	);
}