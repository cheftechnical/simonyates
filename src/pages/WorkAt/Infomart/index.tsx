import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';

export default function Infomart() {
	const [sections, setSections] = React.useState<SectionItem[]>();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedContent = React.useMemo(() => {
		return (<Content onChange={handleChange}/>);
	}, [handleChange]);

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="infomart" variant="default"/>);
	}, []);

	return (
		<DefaultLayout title="Work at Infomart" top="work">
			<WorkAtTemplate
				content={renderedContent}
				employer="Infomart"
				logo={renderedWorkAtLogo}
				sections={sections}
				role="Architect & Lead Developer"
				when="2012–2014"
				where="Toronto, Canada"
			/>
		</DefaultLayout>
	);
};
