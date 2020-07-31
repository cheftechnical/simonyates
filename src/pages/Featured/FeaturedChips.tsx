import * as React from 'react';
import {Chip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../styling/rem';

interface Props {
	list: string[];
}

const useStyles = makeStyles((theme) => ({
	chips: {
		paddingTop: theme.spacing((12 + 4 + 2)/8),
		paddingBottom: theme.spacing((12 - 4)/8),
		lineHeight: rem(48 - 4), // less 4 for the border thickness
	},
}));

export default function FeaturedChips(props: Props) {
	const classes = useStyles();
	const {list} = props;

	return (
		<div className={classes.chips}>
			{list.map((item, index) => (
				<Chip key={index} label={item}/>
			))}
		</div>
	);
}