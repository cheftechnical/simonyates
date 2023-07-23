// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children: any;
	next?: boolean | undefined;
}

// const useStyles = makeStyles((theme) => ({
// 	root: {},
// 	rootNext: {
// 		paddingTop: theme.spacing(24 / 8)
// 	}
// }));

export default function Ul(props: Props) {
	// const classes = useStyles();
	const {children, next} = props;

	// const rootClassName = (next)
	// 	? `${classes.root} ${classes.rootNext}`
	// 	: classes.root;
	//
	// return (
	// 	<ul className={rootClassName}>
	// 		{children}
	// 	</ul>
	// );

	return (
		<ul>
			{children}
		</ul>
	)
};