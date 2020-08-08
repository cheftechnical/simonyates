import * as React from 'react';
import Scrollspy from 'react-scrollspy';
import {makeStyles} from '@material-ui/core/styles';
import NavRightItem from './NavRightItem';
import {color} from '../../styling/Color';
import {Box} from '@material-ui/core';

type SectionItem = {
	id: string,
	name: string
}

interface Props {
	sections: SectionItem[];
}

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		maxWidth: '17%' // @todo no idea why this works, but it does
	},

	scrollspy: {
		listStyleType: 'none'
	},

	// The Scrollspy component attaches this class to the currently selected item
	isCurrent: {
		color: color.grey['900'],

		// borderLeft: `2px solid magenta`
		borderLeft: `2px solid ${color.grey['500']}`
	},
}));

export default function NavRight(props: Props) {
	const classes = useStyles();
	const {sections} = props;

	if (!sections) return <React.Fragment/>;

	const items = sections.map(current => {
		return current.id;
	});

	return (
		<Box display={{xs: 'none', sm: 'block'}}>
			<div className={classes.root}>
				<Scrollspy currentClassName={classes.isCurrent} items={items} style={{listStyleType: 'none'}} offset={70}>
					{sections.map((item, index) => (
						<NavRightItem id={item.id} key={index} name={item.name}/>
					))}
				</Scrollspy>
			</div>
		</Box>
	);
};
