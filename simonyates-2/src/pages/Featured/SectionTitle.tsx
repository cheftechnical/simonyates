// import * as React from 'react';
import Typography from '../../styling/Typography/Typography';
import {styled} from "@mui/material";
// import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children?: any;
}

// const useStyles = makeStyles((theme) => ({
// 	typography: {
// 		marginBottom: theme.spacing(16/8)
// 	}
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
	marginBottom: theme.spacing(16/8)
}))


export default function SectionTitle(props: Props) {
	// const classes = useStyles();
	const {children} = props;

	return (
		<StyledTypography group="primary" variant="h2" weight="regular">
			{children}
		</StyledTypography>
	);
};
