import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import Callout from '../../../components/Callout';
import DefaultLayout from '../../../layouts/Default';
import Section from '../../../components/Section';
import WorkAtDescription from '../../../components/workAt/WorkAtDescription';
import WorkAtHeader from '../../../components/workAt/WorkAtHeader';
import WorkAtProject from '../../../components/workAt/WorkAtProject';
import Sections from '../../../components/Sections';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import Typography from '../../../styling/Typography';

export default function Rbc() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at RBC" top="work">
			<Container>
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
							employees worldwide.
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

									<Ul>
										<Li>Interactive dashboards for monitoring infrastructure</Li>
										<Li>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee upgrades</Li>
										<Li>Real–time monitoring of critical infrastructure to enable the SRE team to monitor SLAs for 99.999% (five–nines) availability </Li>
									</Ul>
								</WorkAtProject>

								<WorkAtProject name="Automatic Validation and Self Healing of Seven Years worth of Financial Data" when="2019–Present">
									<Typography group="primary" variant="body" weight="regular">
										Before this software project began, I fought for certain architectural changes to ensure the Elasticsearch could function at scale. The project was already well underway before I got involved, so it was an uphill battle, but I prevailed. The changes I proposed increased performance and reliability and are deeply baked into the current architecture as a result.
									</Typography>

									<Callout>
										Node.js + Express • React + Typescript • Elasticsearch • PostgreSQL • [some charting library]
									</Callout>

									<Ul>
										<Li>Interactive dashboards for monitoring infrastructure</Li>
										<Li>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee upgrades</Li>
										<Li>Real–time monitoring of critical infrastructure to enable the SRE team to monitor SLAs for 99.999% (five–nines) availability </Li>
									</Ul>
								</WorkAtProject>
							</Section>
							<Section id="section-2" name="Machine Learning / Artificial Intelligence">
								<Ul>
									<Li>Developed a chatbot from scratch to answer common questions and provide answers using real-time infrastructure metrics (e.g. "Is service [x] down?" or "Whats the TPS for [thing]"</Li>
									<Li>Used NLP via TF–IDF to automatically label reports about previous incidents to help identify areas for improvement</Li>
								</Ul>
							</Section>
							<Section id="section-3" name="Budgeting">
								<WorkAtProject name="Cost Chargeback Model" when="2019–Present">
									<Callout>
										Node.js + Express • React + Typescript • Elasticsearch • PostgreSQL • [some charting library]
									</Callout>
									<Ul>
										<Li>Developed a chatbot from scratch to answer common questions and provide answers using real-time infrastructure metrics (e.g. "Is service [x] down?" or "Whats the TPS for [thing]"</Li>
									</Ul>
								</WorkAtProject>
							</Section>
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
			</Container>
		</DefaultLayout>
	);
};
