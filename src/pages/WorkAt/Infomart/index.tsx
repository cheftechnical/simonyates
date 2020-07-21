import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import Logo from '../../../components/Logo';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtHeader from '../components/WorkAtHeader';
import Sections from '../../../components/Sections';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import Callout from '../../../components/Callout';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtProject from '../components/WorkAtProject';
import Li from '../../../styling/ListsUnordered/Li/intex';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Typography from '../../../styling/Typography';

export default function Infomart() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Infomart" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="infomart" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Infomart"
									role="Architect & Lead Developer"
									when="2012–2014"
									where="North York, ON, Canada"
								/>
								<WorkAtDescription>
									Infomart was a division of Postmedia, the industry standard for Canadian newspaper archiving.
								</WorkAtDescription>
								<Callout>
									Fun Fact: Elasticsearch was still in early beta when I started working with it on this project. At the time, the latest version was version ~ 0.19–0.2.x
								</Callout>
							</Section>
							<Section id="key-results" name="Key Results">
								<WorkAtSectionTitle>
									Key Results
								</WorkAtSectionTitle>
								<Ul>
									<Li>Designed the technical architecture</Li>
									<Li>Designed Elasticsearch document schemas and wrote all queries</Li>
									<Li>Built the development team from ground up - managed the hiring process from writing job descriptions, interviews to selecting candidates</Li>
									<Li>Wrote the development style guide, including the best practices, for the team</Li>
									<Li>Built custom data visualization charts in SVG to meet specific design requirements of the project</Li>
								</Ul>
							</Section>
							<Section id="about-the-project" name="About The Project">
								<WorkAtSectionTitle>
									About the Project
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									For the last 30 years, Infomart had collected over 200 million newspaper articles from every major Canadian publisher.
								</Typography>
								<Typography next group="primary" variant="body" weight="regular">
									The goal of this project was to enhance the search capabilities of the tool, while expanding its archives to include content from leading social media platforms like Twitter, Facebook and YouTube.
								</Typography>
								<Typography next group="primary" variant="body" weight="regular">
									Data was originally stored in Microsoft SQL Server, but given the full text requirements of the tool, Elasticsearch proved to be an ideal use-case for this modernization effort. Elasticsearch was still in its early beta then (~ version 0.19–0.2.x), so the documentation was a challenge, but the promise was very high.
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
	);
};
