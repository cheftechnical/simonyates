// import * as React from 'react';
import DefaultLayout from '../../layouts/Default/Default';
// import {Link} from '@material-ui/core';
import Typography from '../../styling/Typography/Typography';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color/Color';
import {Link as ReactRouterDom} from 'react-router-dom';
import rem from '../../styling/rem';
import MyContainer from '../../styling/MyContainer/MyContainer';

// const useStyles = makeStyles((theme) => ({
// 	headline: {
// 		marginTop: theme.spacing(272/8),
// 		marginBottom: theme.spacing(72/8),
//
// 		fontSize: rem(88),
// 		lineHeight: rem(88),
// 	},
// 	body: {
// 		marginBottom: theme.spacing(388/8),
// 		color: color.grey['600']
// 	},
// 	link: {
// 		fontWeight: 'bold',
// 		color: color.grey['900'],
// 		paddingBottom: '4px',
// 	}
// }));

export default function NoMatch() {
	// const classes = useStyles();

	// return (
	// 	<DefaultLayout title="404: Page Not Found">
	// 		<MyContainer>
	// 			<Typography className={classes.headline} group="primary" variant="h1" weight="regular">
	// 				404
	// 			</Typography>
	// 			<Typography className={classes.body} group="primary" variant="h3" weight="regular">
	// 				Sorry, that page doesn&rsquo;t&nbsp;exist.<br/>
	// 				But you can navigate back to&nbsp;<Link className={classes.link} component={ReactRouterDom} to="/">home</Link>.
	// 			</Typography>
	// 		</MyContainer>
	// 	</DefaultLayout>
	// );

	return (
		<div>[NoMatch]</div>
	)
};
