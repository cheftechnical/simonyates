import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Grid} from '@material-ui/core';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import WorkAtHeader from '../components/WorkAtHeader';
import Sections from '../../../components/Sections';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import Callout from '../../../components/Callout';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import WorkAtProject from '../components/WorkAtProject';
import MyContainer from '../../../styling/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer';
import WorkAtLogo from '../components/WorkAtLogo';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	callout: {
		marginBottom: theme.spacing(20 / 8)
	}
}));

export default function Infomart() {
	const classes = useStyles();
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Infomart" top="work">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={1}>
						<WorkAtLogo brand="infomart" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Infomart"
									role="Architect & Lead Developer"
									when="2012–2014"
									where="Toronto, Canada"
								/>
								<WorkAtDescription>
									Infomart was a division of Postmedia, the industry standard for Canadian
									newspaper&nbsp;archiving.
								</WorkAtDescription>
								<Callout className={classes.callout}>
									<strong>Fun Fact: </strong>Elasticsearch was still in early beta when I started
									working with it on this project. At the time, the latest version was
									version&nbsp;~&nbsp;0.19–0.2.x
								</Callout>
							</Section>

							<Section id="about-the-project" name="About The Project">
								<WorkAtSectionTitle>
									About The Project
								</WorkAtSectionTitle>
								<Typography group="primary" variant="body" weight="regular">
									For the last 30 years, Infomart had collected over 200 million newspaper articles
									from every major Canadian&nbsp;publisher.
								</Typography>
								<Typography next group="primary" variant="body" weight="regular">
									The goal of this project was to enhance the search capabilities of the tool, while
									expanding its archives to include content from leading social media platforms like
									Twitter, Facebook, and&nbsp;YouTube.
								</Typography>
								<Typography next group="primary" variant="body" weight="regular">
									Data was originally stored in Microsoft SQL Server, but given the full text
									requirements of the tool, Elasticsearch proved to be an ideal use-case for this
									modernization effort. Elasticsearch was still in its early beta then
									(~ version 0.19–0.2.x), so the documentation was a challenge, but the promise was
									very&nbsp;high.
								</Typography>

								<WorkAtProject next name="Languages & Frameworks"/>
								<Callout list={[
									'PHP + CakePHP',
									'Bootstrap.js',
									'JQuery',
									'Highcharts',
									'SVG',
									'Google Maps API',
									'OAuth 2.0',
									'PHPUnit'
								]}/>

								<WorkAtProject next name="Databases & Indices"/>
								<Callout list={[
									'Elasticsearch',
									'Memcache',
									'Microsoft SQL Server',
									'MySQL',
								]}/>

								<WorkAtProject next name="Vendor Services"/>
								<Callout list={[
									'FQL (Facebook Query Language)',
									'Gnip EDC',
									'Gnip Powertrack',
									'Twitter API',
									'YouTube API'
								]}/>
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
