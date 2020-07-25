import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../Color';

interface Props {
	children?: any;
}

const useStyles = makeStyles((theme) => ({
	li: {
		...theme.typography.body1,
		marginBottom: theme.spacing(16/8),

		marginLeft: '21px', // this moves the whole line (including bullet)
		paddingLeft: 0,

		listStyle: 'none',
		color: color.grey[900],

		'&:before': {
			content: `'\\2022'`,

			display: 'block',
			position: 'relative',
			maxWidth: '0px',
			maxHeight: '0px',
			left: '-27px', // this moves just the bullet
			top: '-4px',
			color: color.grey['800'],
			fontSize: '20px'
		}
	},
}));

export default function Li(props: Props) {
	const classes = useStyles();
	const {children} = props;

	return (
		<li className={classes.li}>{children}</li>
	);
};
