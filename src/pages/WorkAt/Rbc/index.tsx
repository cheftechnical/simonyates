import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';

export default function Rbc() {
	const [sections, setSections] = React.useState<SectionItem[]>();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedContent = React.useMemo(() => {
		return (<Content onChange={handleChange}/>);
	}, [handleChange]);

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="rbc" variant="default"/>);
	}, []);

	return (
		<DefaultLayout title="Work at RBC" top="work">
			<WorkAtTemplate
				content={renderedContent}
				employer="RBC"
				logo={renderedWorkAtLogo}
				role={(<React.Fragment>Product Manager / Lead Software Engineer, Site&nbsp;Reliability&nbsp;Engineering</React.Fragment>)}
				sections={sections}
				when="July 2018 to Present"
				where="Toronto, Canada"
			/>
		</DefaultLayout>
	);
};
