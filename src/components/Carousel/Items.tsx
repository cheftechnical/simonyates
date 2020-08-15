import * as React from 'react';
import {ReactElement} from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	previous: number;
	current: number;
	next: number;

	items: ReactElement[];
}

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: 'pink'
	},
	item: {
		display: 'inline-block'
	},
	boxPrevious: {
		border: '1px solid magenta'
	},
	boxCurrent: {
		border: '1px solid cyan'
	},
	boxNext: {
		border: '1px solid lime'
	}
}));

export default function Items(props: Props) {
	const classes = useStyles();
	const {items, previous, current, next} = props;

	const previousItem = items[previous];
	const currentItem = items[current];
	const nextItem = items[next];

	return (
		<div className={classes.root}>
			<div className={`${classes.item} ${classes.boxPrevious}`}>
				previousItem:<br/>
				{previousItem}
			</div>
			<div className={`${classes.item} ${classes.boxCurrent}`}>
				currentItem:<br/>
				{currentItem}
			</div>
			<div className={`${classes.item} ${classes.boxNext}`}>
				nextItem:<br/>
				{nextItem}
			</div>
		</div>
	)
}
