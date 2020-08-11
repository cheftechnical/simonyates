import * as React from 'react';
import DefaultLayout from "../../../layouts/Default";
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';

export default function UnchartedSoftware() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedContent = React.useMemo(() => {
		return (<Content onChange={handleChange}/>);
	}, [handleChange]);

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="uncharted-software" variant="default"/>);
	}, []);

	return (
		<DefaultLayout title="Work at Uncharted Software" top="work">
			<WorkAtTemplate
				content={renderedContent}
				employer="Uncharted Software"
				logo={renderedWorkAtLogo}
				sections={sections}
				role="Senior Software Architect"
				when="May 2016 to 2018"
				where="Toronto, Canada"
			/>
		</DefaultLayout>
	);
};
