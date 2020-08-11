import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';

type SectionItem = {
	id: string;
	name: string;
}

interface Props {
	children?: any | any[];
	onChange: (sectionItems: SectionItem[]) => void;
}

const useStyles = makeStyles((theme) => ({
	root: {
		// border: '1px solid blue'
	}
}));

export default function Sections(props: Props) {
	const classes = useStyles();
	const {children, onChange} = props;

	const [initialized, setInitialized] = React.useState(false);

	React.useEffect(() => {
		if (initialized) return;
		setInitialized(true);

		const sectionItems = children.map((item: any) => {
			return {
				id: item.props.id,
				name: item.props.name
			};
		});

		onChange(sectionItems);

	}, [children, initialized, onChange]);

	return (
		<div className={classes.root}>
			{children}
		</div>
	);
};
