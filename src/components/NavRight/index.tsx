import * as React from 'react';
import Scrollspy from 'react-scrollspy';
import {makeStyles} from '@material-ui/core/styles';
import NavRightItem from './NavRightItem';

type SectionItem = {
	id: string,
	name: string
}

interface Props {
	sections: SectionItem[];
}

const useStyles = makeStyles((theme) => ({
	isCurrent: {
		color: 'lime',
		backgroundColor: 'cyan'
	},
	root: {
		position: 'fixed'
	}
}));

export default function NavRight(props: Props) {
	const classes = useStyles();
	const {sections} = props;

	if (!sections) return <React.Fragment/>;

	const items = sections.map(current => {
		return current.id;
	});
// offset={0}
	return (
		<div className={classes.root}>
			<Scrollspy currentClassName={classes.isCurrent} items={items}>
				{sections.map((item, index) => (
					<NavRightItem id={item.id} key={index} name={item.name}/>
				))}
			</Scrollspy>
		</div>
	);
};
