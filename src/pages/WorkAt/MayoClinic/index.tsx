import * as React from 'react';
import {SectionItem} from '../../../components/Section/SectionItem';
import DefaultLayout from '../../../layouts/Default';
import WorkAtLogo from '../components/WorkAtLogo';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';

export default function MayoClinic() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedContent = React.useMemo(() => {
		return (<Content onChange={handleChange}/>);
	}, [handleChange])

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="mayo-clinic" variant="default"/>);
	}, []);

	return (
		<DefaultLayout title="Work at Mayo Clinic" top="work">
			<WorkAtTemplate
				content={renderedContent}
				employer="Mayo Clinic"
				logo={renderedWorkAtLogo}
				sections={sections}
				role="Software Engineer"
				when="October 2014 to October 15"
				where="Rochester, MN, USA"
			/>
		</DefaultLayout>
	);
};
