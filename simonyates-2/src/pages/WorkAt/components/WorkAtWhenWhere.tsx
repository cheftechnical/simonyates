// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';
import Typography from '../../../styling/Typography/Typography';
import {styled} from "@mui/material";

interface Props {
	when: string;
	where: string;
}

// const useStyles = makeStyles((theme) => ({
// 	whenWhere: {
// 		marginBottom: theme.spacing(32/8),
// 		color: color.grey['600']
// 	},
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
	marginBottom: theme.spacing(32 / 8),
	color: color.grey['600']
}));

export default function WorkAtWhenWhere(props: Props) {
	// const classes = useStyles();
	const {when, where} = props;

	return (
		<StyledTypography group="primary" variant="body" weight="regular">{when} &bull; {where}</StyledTypography>
	);
};