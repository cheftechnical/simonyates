// import * as React from 'react';
import Typography from '../../../styling/Typography/Typography';
import {styled} from "@mui/material";
// import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children: any;
}

// const useStyles = makeStyles((theme) => ({
// 	role: {
// 		marginBottom: theme.spacing(8/8),
// 	},
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
	marginBottom: theme.spacing(8/8),
}))

export default function WorkAtRole(props: Props) {
	// const classes = useStyles();
	const {children} = props;

	return (
		<StyledTypography component="p" group="primary" variant="h4" weight="medium">{children}</StyledTypography>
	);
};
