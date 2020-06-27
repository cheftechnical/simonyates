import * as React from 'react';
import DefaultLayout from "../../../layouts/Default";
import {Container, Grid} from '@material-ui/core';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtDescription from '../components/WorkAtDescription';
import Section from '../../../components/Section';
import WorkAtProject from '../components/WorkAtProject';

export default function UnchartedSoftware() {
	return (
		<DefaultLayout title="Work at Uncharted Software" top="work">
			<Container>
				<Grid container>
					<Grid item xs={1}>[logo]</Grid>
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
				</Grid>
				<Grid item xs={2}/>
				<Grid item xs={3}>
					[navigation placeholder]
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
