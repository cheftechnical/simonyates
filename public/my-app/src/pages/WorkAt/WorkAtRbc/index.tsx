import * as React from 'react';
import {Grid} from '@material-ui/core';
import Callout from '../../../components/Callout';
import DefaultLayout from '../../../layouts/Default';
import Section from '../../../components/Section';
import WorkAtDescription from '../../../components/workAt/WorkAtDescription';
import WorkAtHeader from '../../../components/workAt/WorkAtHeader';
import WorkAtProject from '../../../components/workAt/WorkAtProject';
import Sections from '../../../components/Sections';
import NavRight from '../../../components/NavRight';

type SectionItem = {
	id: string,
	name: string
}

export default function WorkAtRbc() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout top="work">
			<Grid container>
				<Grid item xs={1}>[logo]</Grid>
				<Grid item xs={6}>
					<WorkAtHeader
						employer="RBC"
						role="Full-Stack Developer, API Site Reliability Engineering"
						when="July 2018 to Present"
						where="Toronto, Canada"
					/>
					<WorkAtDescription>
						The Royal Bank of Canada (RBC) is the largest bank in Canada by asset value, with over 80,000
						employees
						worldwide.
					</WorkAtDescription>
					<Sections onChange={handleChange}>
						<Section id="section-1" name="Application Development & Custom Tooling">
							<WorkAtProject name="SRE Global Dashboard" when="2019–Present">
								<Callout>
									Node.js + Express &bull;
									React + Typescript &bull;
									Elasticsearch &bull;
									PostgreSQL &bull;
								</Callout>
							</WorkAtProject>
						</Section>
						<Section id="section-2" name="Machine Learning / Artificial Intelligence"/>
						<Section id="section-3" name="Budgeting"/>
						<Section id="section-4" name="Events"/>
						<Section id="section-5" name="Publications"/>
						<Section id="section-6" name="Active Research"/>
						<Section id="section-7" name="Other Activities"/>
					</Sections>
				</Grid>
				<Grid item xs={2}>
					<NavRight sections={sections}/>
				</Grid>
			</Grid>
		</DefaultLayout>
	);
};
