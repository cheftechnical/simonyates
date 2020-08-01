import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Grid} from '@material-ui/core';
import {SectionItem} from '../../../components/Section/SectionItem';
import NavRight from '../../../components/NavRight';
import Sections from '../../../components/Sections';
import WorkAtHeader from '../components/WorkAtHeader';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import Callout from '../../../components/Callout';
import WorkAtProject from '../components/WorkAtProject';
import MyContainer from '../../../styling/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer';
import WorkAtLogo from '../components/WorkAtLogo';
import Quote from '../../../components/Quote';

export default function GenworthCanada() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Genworth Canada" top="work">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={1}>
						<WorkAtLogo brand="genworth-canada" variant="default"/>
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
									Genworth Canada is the leading private sector supplier of mortgage default
									insurance in&nbsp;Canada.
								</WorkAtDescription>
							</Section>

							<Section id="about-the-project" name="About The Project">
								<WorkAtSectionTitle>
									About The Project
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									Genworth Canada was leading a North American initiative to move their application
									system to Elasticsearch. The goal of this new system: make it easier for Genworth to
									detect &ldquo;red-flag&rdquo; indicators of fraud from customer&nbsp;applications.
								</Typography>

								<WorkAtProject next name="Finding Duplicates"/>
								<Typography next group="primary" variant="body" weight="regular">
									I was hired based on my previous experience with Elasticsearch, but finding ways of
									removing dependencies on vendor services was not something I was expected to do. It
									was only after I got involved in the project and learned about their use case that I
									saw an opportunity to suggest a better way of doing&nbsp;things.
								</Typography>
								<Typography next group="primary" variant="body" weight="regular">
									Using several state-of-the-art features of Elasticsearch, I was able to prototype a
									solution that effectively replaced a dependency on one of their key data analytics
									vendors, saving Genworth 10&rdquo;s of thousands of dollars&nbsp;annually!
								</Typography>

								<Callout noBottomGutter list={[
									'Node.js + Express w/ socket.io',
									'Extjs',
									'Elasticsearch',
									'MQTT',
									'Selenium'
								]}/>
							</Section>

							<Section id="recognition" name="Recognition">
								<WorkAtSectionTitle>
									Recognition
								</WorkAtSectionTitle>

								<Quote source="Michael Rossi, Product Manager, Genworth Canada">
									Simon has been critical in helping the team in adding technologies like Node.js,
									Elasticsearch, and ExtJS to the Path technology stack building on his
									past&nbsp;experiences.
								</Quote>
							</Section>
						</Sections>
					</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</MyGridContainer>
			</MyContainer>
		</DefaultLayout>
	)
};
