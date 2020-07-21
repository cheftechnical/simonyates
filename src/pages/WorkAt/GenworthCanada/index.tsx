import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import {SectionItem} from '../../../components/Section/SectionItem';
import Logo from '../../../components/Logo';
import NavRight from '../../../components/NavRight';
import Sections from '../../../components/Sections';
import WorkAtHeader from '../components/WorkAtHeader';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import Li from '../../../styling/ListsUnordered/Li/intex';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Callout from '../../../components/Callout';
import WorkAtSubSections from '../components/WorkAtSubSections';
import WorkAtProject from '../components/WorkAtProject';

export default function GenworthCanada() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Genworth Canada" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="genworth-canada" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Genworth Canada"
									role="Developer"
									when="July 2014 to January 2015"
									where="Oakville, ON, Canada"
								/>
								<WorkAtDescription>
									Genworth Canada is the leading private sector supplier of mortgage default insurance in Canada.
								</WorkAtDescription>
							</Section>

							<Section id="key-results" name="Key Results">
								<WorkAtSectionTitle>
									Key Results
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									Helped the team get rapidly up-to-speed with Elasticsearch:
								</Typography>
								<Ul>
									<Li>Designed system to automatically detect names and addresses which may refer to the same subject, but uses different spelling</Li>
									<Li>Hosted regular Lunch-and-Learn events on Elasticsearch and demonstrated its applications</Li>
									<Li>Saved the company tens of thousands annually by identifying an area of improvement that eliminated the need for a third-party vendor service</Li>
									<Li>Was known as the &ldquo;go-to-guy&rdquo; regarding all things Elasticsearch</Li>
								</Ul>
							</Section>

							<Section id="about-the-project" name="About The Project">
								<WorkAtSectionTitle>
									About The Project
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									<em>Genworth Canada was leading a North American initiative to move their application system to Elasticsearch. The goal of this new system: make it easier for Genworth to detect "red-flag" indicators of fraud from customer applications.</em>
								</Typography>
								<Callout list={[
									'Node.js + Express w/ socket.io',
									'Extjs',
									'Elasticsearch',
									'MQTT',
									'Selenium'
								]}/>
								<Typography group="primary" variant="body" weight="regular">
									Finding Duplicates
								</Typography>
								<Typography group="primary" variant="body" weight="regular">
									I was hired based on my previous experience with Elasticsearch, but finding ways of removing dependencies on vendor services was not something I was expected to do. It was only after I got involved in the project and learned about their use case that I saw an opportunity to suggest a better way of doing things.
								</Typography>
								<Typography group="primary" variant="body" weight="regular">
									Using several state-of-the-art features of Elasticsearch, I was able to prototype a solution that effectively replaced a dependency on one of their key data analytics vendors, saving Genworth 10's of thousands of dollars annually!
								</Typography>
							</Section>

							<Section id="recognition" name="Recognition">
								<WorkAtSectionTitle>
									Recognition
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									<em>&ldquo;Simon has been critical in helping the team in adding technologies like NodeJS, ElasticSearch, and ExtJS to the Path technology stack building on his past experiences.&rdquo;</em>
								</Typography>
								<Typography group="primary" variant="body" weight="regular">
									— Michael Rossi, Product Manager, Genworth Canada (contractor)
								</Typography>
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