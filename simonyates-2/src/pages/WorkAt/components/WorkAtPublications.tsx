// import * as React from 'react';
// import {makeStyles, Theme} from '@material-ui/core/styles';
import rem from '../../../styling/rem';
import ConditionalIndent from '../../../components/ConditionalIndent/ConditionalIndent';

interface Props {
	children?: any;
	next?: boolean;
}

// const useStyles = makeStyles((theme: Theme) => ({
// 	root: {},
//
// 	next: {
// 		paddingTop: rem(40),
// 	}
// }));

export default function WorkAtPublications(props: Props) {
	// const classes = useStyles();
	const {children, next} = props;

	// const rootClassName = (next)
	// 	? `${classes.root} ${classes.next}`
	// 	: classes.root;

	// return (
	// 	<ConditionalIndent className={rootClassName}>
	// 		{children}
	// 	</ConditionalIndent>
	// );

	return (
		<div>{children}</div>
	)
}