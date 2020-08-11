import * as React from 'react';
import {SectionItem} from '../Section/SectionItem';
import NavRightItem from '../NavRight/NavRightItem';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';

interface Props {
	sections: SectionItem[];
	selected: string;
}

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		maxWidth: '17%' // @todo no idea why this works, but it does
	},

	scrollspy: {
		listStyleType: 'none'
	},
}));

export default function NavRight2(props: Props) {
	const classes = useStyles();
	const {sections, selected} = props;

	if (!sections) return <React.Fragment/>;

	console.log('selected', selected);

	return (
		<div className={classes.root}>
			<ul className={classes.scrollspy}>
				{sections.map((item, index) => (
					<NavRightItem id={item.id} key={index} name={item.name}/>
				))}
			</ul>
		</div>
	);
};
