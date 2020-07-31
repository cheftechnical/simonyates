import * as React from 'react';
import {SectionItem} from '../../../components/Section/SectionItem';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtDescription from '../components/WorkAtDescription';
import Sections from '../../../components/Sections';
import Section from '../../../components/Section';
import NavRight from '../../../components/NavRight';
import Logo from '../../../components/Logo';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import Callout from '../../../components/Callout';
import WorkAtPublications from '../components/WorkAtPublications';
import WorkAtPublication from '../components/WorkAtPublication';
import WorkAtEvents from '../components/WorkAtEvents';
import WorkAtEventsGroup from '../components/WorkAtEventsGroup';
import WorkAtEvent from '../components/WorkAtEvent';
import Figure from '../../../components/Figure';

export default function MayoClinic() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Mayo Clinic" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="mayo-clinic" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Mayo Clinic"
									role="Software Engineer"
									when="October 2014 to October 15"
									where="Rochester, MN, USA"
								/>

								<WorkAtDescription>
									Mayo Clinic is an American nonprofit academic medical center based in Rochester, MN, focused on integrated patient care, education and research. It employs over 4,500 physicians and scientists, along with 58,400 administrative and allied health staff.
								</WorkAtDescription>
							</Section>

							<Section id="key-results" name="Key Results">
								<WorkAtSectionTitle>
									Key Results
								</WorkAtSectionTitle>

								<Ul>
									<Li>Co-authored "Patient-Like-Mine: A Real Time, Visual Analytics Tool for Clinical Decision Support" and poster presentation for the 2015 IEEE International Conference on Big Data</Li>
									<Li>Built software to visualize and analyze patient medical data for clinical decision support</Li>
									<Li>Built pipeline to transform data from HL7 V2 RIM and FHIR schemas to parent/child Elasticsearch documents</Li>
									<Li>Re-wrote experimental prototype software for production use</Li>
									<Li>Optimized Elasticsearch queries for speed and search-ability </Li>
								</Ul>
							</Section>

							<Section id="patient-like-mine" name="Patient Like Mine">
								<WorkAtSectionTitle>
									Patient Like Mine
								</WorkAtSectionTitle>

								<Typography group="primary" variant="body" weight="regular">
									The Patient Like Mine project was a real-time, visual analytics tool for clinical decision support. The System expands the "recall of past experience" approach that a provider (physician) uses to formulate a course of action for a given patient. By utilizing Big Data techniques, we enable the provider to recall all similar patients from an institution's electronic medical record (EMR) repository, to explore "what-if" scenarios, and to collect these evidence-based cohorts for future statistical validation and pattern mining.
								</Typography>

								<Callout list={[
									'Node.js + Express',
									'Hapi.js',
									'Elasticsearch',
									'MongoDB',
									'RabbitMQ River',
									'Highcharts',
									'D3',
									'Elastic Marvel'
								]}/>

								<Ul>
									<Li>Building all of the visualization tools of the project</Li>
									<Li>Optimizing Elasticsearch queries to provide real-time search on very-large large datasets, which included over 1 billion facts, each with over 1 thousand properties and up to 1 thousand data points per second</Li>
									<Li>Re-writing an internal tool used for creating complex nested Elasticsearch queries, using modern ES6 standards</Li>
									<Li>Presenting our work at monthly <em>Lunch-and-Learn</em> workshops, where we would share our progress with other teams within the Mayo Clinic</Li>
								</Ul>
							</Section>

							<Section id="publications" name="Publications">
								<WorkAtSectionTitle>
									Publications
								</WorkAtSectionTitle>

								<WorkAtPublications>
									<WorkAtPublication
										author="P. Li, S. Yates, J. Lovely, D. Larson"
										publisher="IEEE"
										title="Patient Like Mine: A Real Time, Visual Analytics Tool For Clinical Decision Support"
									 	when="2015"
									/>
								</WorkAtPublications>
							</Section>

							<Section id="events" name="Events">
								<WorkAtSectionTitle>
									Events
								</WorkAtSectionTitle>

								<WorkAtEvents>
									<WorkAtEventsGroup name="IEEE Big Data Conference">
										<WorkAtEvent date="October 29 — November 1, 2015" title="Santa Clara, CA, USA"/>
									</WorkAtEventsGroup>
								</WorkAtEvents>
							</Section>

							<Section id="recognition" name="Recognition">
								<WorkAtSectionTitle>
									Recognition
								</WorkAtSectionTitle>

								<a href="https://www.elastic.co/elasticon/conf/2016/sf/bringing-healthcare-analytics-to-the-point-of-care-at-mayo-clinic">
									<Figure
										alt="Elasticon 2016"
										caption="Dr. Peter Li acknowledges my help at 43 minutes:"
										src="/images/work-at/mayo-clinic/elasticon.png"
									/>
								</a>
							</Section>
						</Sections>
					</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	)
}