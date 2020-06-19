import * as React from 'react';

type SectionItem = {
	id: string,
	name: string
}

interface Props {
	children?: any | any[];
	onChange: (sectionItems: SectionItem[]) => void;
}

export default function Sections(props: Props) {
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
		<div>
			{children}
		</div>
	);
};
