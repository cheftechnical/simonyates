import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';

export default function JibDesignAndAdvertising() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedContent = React.useMemo(() => {
		return (<Content onChange={handleChange}/>);
	}, [handleChange]);

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="jib-design-and-advertising" variant="default"/>);
	}, []);

	return (
		<DefaultLayout title="Work at Jib Design &amp; Advertising" top="work">
			<WorkAtTemplate
				content={renderedContent}
				employer="Jib Design & Advertising"
				logo={renderedWorkAtLogo}
				sections={sections}
				role="Technical Director"
				when="2007–2008"
				where="Toronto, ON, Canada"
			/>
		</DefaultLayout>
	);
};
