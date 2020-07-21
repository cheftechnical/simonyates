import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';
import Logo from '../../../components/Logo';
import {SectionItem} from '../../../components/Section/SectionItem';
import NavRight from '../../../components/NavRight';
import Sections from '../../../components/Sections';
import Section from '../../../components/Section';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtProject from '../components/WorkAtProject';

export default function JibDesignAndAdvertising() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Jib Design &amp; Advertising" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="jib-design-and-advertising" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Jib Design & Advertising"
									role="Technical Director"
									when="2007–2008"
									where="Toronto, ON, Canada"
								/>
								<WorkAtDescription>
									Design &amp; advertising agency in Toronto.
								</WorkAtDescription>
							</Section>

							<Section id="key-results" name="Key Results">
								<WorkAtSectionTitle>
									Key Results
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									Lead developer on all client web development projects:
								</Typography>
								<Ul>
									<Li>Wrote the university registration system for the Apple Education Store on apple.ca</Li>
									<Li>Wrote and deployed all HTML emails for Apple Canada</Li>
									<Li>Conceptualized, designed and wrote an internal tool for client asset approvals</Li>
									<Li>Reverse engineered Google PageRank for improved SEO strategies</Li>
								</Ul>
							</Section>

							<Section id="notable-projects" name="Notable Projects">
								<WorkAtSectionTitle>
									Notable Projects
								</WorkAtSectionTitle>
								<WorkAtProjects>
									<WorkAtProject name="Apple Canada Introduces iPhone" when="">
										<Typography group="primary" variant="body" weight="regular">
											When Apple launched the original iPhone in Canada, it wanted to showcase its ability to view fully–rendered HTML web pages (that was revolutionary at the time). Many websites still relied on Flash at the time, and Apple didn't want to risk showing a web page that would fail because it used an unsupported technology.
										</Typography>
									</WorkAtProject>
								</WorkAtProjects>
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
