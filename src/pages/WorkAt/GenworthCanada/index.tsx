import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtLogo from '../components/WorkAtLogo';
import WorkAtTemplate from '../components/WorkAtTemplate';
import Content from './Content';

export default function GenworthCanada() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedContent = React.useMemo(() => {
		return (<Content onChange={handleChange}/>);
	}, [handleChange]);

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="genworth-canada" variant="default"/>);
	}, []);

	return (
		<DefaultLayout title="Work at Genworth Canada" top="work">
			<WorkAtTemplate
				content={renderedContent}
				logo={renderedWorkAtLogo}
				employer="Genworth Canada"
				role="Developer"
				sections={sections}
				when="July 2014 to January 2015"
				where="Oakville, ON, Canada"
			/>
		</DefaultLayout>
	)
};
