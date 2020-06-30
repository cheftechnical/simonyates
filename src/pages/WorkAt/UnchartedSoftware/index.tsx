import * as React from 'react';
import DefaultLayout from "../../../layouts/Default";
import {Container, Grid} from '@material-ui/core';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtDescription from '../components/WorkAtDescription';
import Section from '../../../components/Section';
import WorkAtProject from '../components/WorkAtProject';
import Logo from '../../../components/Logo';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';

export default function UnchartedSoftware() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Uncharted Software" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="uncharted-software" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<WorkAtHeader
							employer="Uncharted Software"
							role="Senior Software Architect"
							when="May 2016 to 2018"
							where="Toronto, Canada"
						/>
						<WorkAtDescription>
							Uncharted Software is a data visualization company.
						</WorkAtDescription>
						<Section id="projects" name="Projects">
							<WorkAtProject name="[redacted project]" when="2017-2018"/>
							<WorkAtProject name="TellFinder" when="2016-2017"/>
						</Section>
					</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
