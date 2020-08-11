import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtLogo from '../components/WorkAtLogo';
import WorkAtEmployer from '../components/WorkAtEmployer';
import WorkAtRole from '../components/WorkAtRole';
import WorkAtWhenWhere from '../components/WorkAtWhenWhere';
import Content from './Content';
import WorkAtTemplate from '../components/WorkAtTemplate';

export default function Rbc() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	const renderedWorkAtLogo = React.useMemo(() => {
		return (<WorkAtLogo brand="rbc" variant="default"/>);
	}, []);

	const renderedWorkAtEmployer = React.useMemo(() => {
		return (<WorkAtEmployer employer="RBC"/>);
	}, []);

	const renderedWorkAtRole = React.useMemo(() => {
		return (<WorkAtRole>Full-Stack Developer, Site Reliability&nbsp;Engineering</WorkAtRole>);
	}, []);

	const renderedWorkAtWhenWhere = React.useMemo(() => {
		return (<WorkAtWhenWhere when="July 2018 to Present" where="Toronto, Canada"/>);
	},[]);

	const renderedContent = React.useMemo(() => {
		return (
			<Content onChange={handleChange}/>
		)
	}, [handleChange]);

	return (
		<DefaultLayout title="Work at RBC" top="work">
			<WorkAtTemplate
				logo={renderedWorkAtLogo}
				employer={renderedWorkAtEmployer}
				role={renderedWorkAtRole}
				whenWhere={renderedWorkAtWhenWhere}
				content={renderedContent}
				sections={sections}
			/>
		</DefaultLayout>
	);
};
