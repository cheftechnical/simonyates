import * as React from 'react';
import DefaultLayout from "../../../layouts/Default";
import {Grid} from '@material-ui/core';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtDescription from '../components/WorkAtDescription';
import Section from '../../../components/Section';
import WorkAtProject from '../components/WorkAtProject';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import Callout from '../../../components/Callout';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import WorkAtProjects from '../components/WorkAtProjects';
import Sections from '../../../components/Sections';
import MyGridContainer from '../../../styling/MyGridContainer';
import MyContainer from '../../../styling/MyContainer';
import WorkAtLogo from '../components/WorkAtLogo';

export default function UnchartedSoftware() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Uncharted Software" top="work">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={1}>
						<WorkAtLogo brand="uncharted-software" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Uncharted Software"
									role="Senior Software Architect"
									when="May 2016 to 2018"
									where="Toronto, Canada"
								/>
								<WorkAtDescription>
									Uncharted Software is a data visualization company with products used by government,
									law enforcement, financial&nbsp;industries.
								</WorkAtDescription>

								<Callout noBottomGutter variant="alert">
									Due to the sensitivity of work involved, certain details listed below have been
									obfuscated or&nbsp;redacted.
								</Callout>
							</Section>

							<Section id="projects" name="Projects">
								<WorkAtSectionTitle>
									Projects
								</WorkAtSectionTitle>

								<WorkAtProjects>
									<WorkAtProject name="[redacted project]" when="2017-2018">
										<Callout list={[
											'Node.js + Express',
											'RDF',
											'Turtle (TTL)',
											'SPARQL',
											'D3',
											'Docker'
										]}/>

										<Ul>
											<Li>Built back-end framework of new&nbsp;product</Li>
											<Li>Built RDF/Turtle/SPARQL parser for causal graph traversing and&nbsp;visualization</Li>
											<Li>Built full-stack prototype of interactive causal&nbsp;graph</Li>
											<Li>Worked closely with data scientists to develop early prototypes of&nbsp;product</Li>
										</Ul>
									</WorkAtProject>

									<WorkAtProject next name="TellFinder" when="2016-2017">
										<Callout list={[
											'Python w/ spAcy',
											'Scala + Spark',
											'HBase',
											'Hadoop',
											'Elasticsearch',
											'RabbitMQ'
										]}/>

										<Ul>
											<Li>Optimized Elasticsearch model for improved query response time and&nbsp;searchability</Li>
											<Li>Used NLP and named entity recognition (NER) via spaCy to extract data from unstructured and semi-structured&nbsp;data</Li>
											<Li>Refactored legacy Java code to Scala with rich set of unit&nbsp;tests</Li>
										</Ul>
									</WorkAtProject>
								</WorkAtProjects>
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
	);
};
