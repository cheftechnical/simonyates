import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Grid} from '@material-ui/core';
import FeaturedPublication from './components/FeaturedPublication';
import Sections from '../../components/Sections';
import Section from '../../components/Section';
import NavRight from '../../components/NavRight';
import {SectionItem} from '../../components/Section/SectionItem';
import {makeStyles} from '@material-ui/core/styles';
import Ul from '../../styling/ListsUnordered/Ul/intex';
import Li from '../../styling/ListsUnordered/Li/intex';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import Download from './Download';
import rem from '../../styling/rem';
import Typography from '../../styling/Typography';
import FeaturedEvent from './components/FeaturedEvent';
import FeaturedEvents from './components/FeaturedEvents';
import FeaturedPublications from './components/FeaturedPublications';
import {color} from '../../styling/Color';
import FeaturedChips from './components/FeaturedChips';
import MyContainer from '../../styling/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer';

const useStyles = makeStyles((theme) => ({
	nextSection: {
		marginTop: rem(68),
	},
	li: {
		color: color.grey['700'],

		'&:before': {
			color: color.grey['500']
		}
	},
	typography: {
		color: color.grey['700']
	}
}));

export default function Featured() {
	const classes = useStyles();
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Featured" top="featured">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="publications" name="Publications">
								<SectionTitle>
									Publications
								</SectionTitle>

								<SectionDescription>
									I&rsquo;ve been incredibly lucky to work along some of the brightest minds of
									North&nbsp;America
								</SectionDescription>

								<FeaturedPublications>
									<FeaturedPublication
										name="Patient-Like-Mine: A Real Time, Visual Analytics Tool for Clinical Decision Support"
										publisher="IEEE Big Data"
										tags={['electronic medical record', 'clinical decision support', 'real-time analytics', 'visual analytics', 'data mining']}
										when="2015"
									>
										<Typography className={classes.typography} group="primary" variant="body" weight="regular">
											Abstract &mdash; We developed a real-time, visual analytics tool for
											clinical decision support. The system expands the &ldquo;recall of past
											experience&rdquo; approach that a provider (physician) uses to formulate a
											course of action for a given patient. By utilizing Big-Data techniques, we
											enable the provider to recall all similar patients from an
											institution&rdquo;s electronic medical record (EMR) repository, to
											explore &ldquo;what-if&rdquo; scenarios, and to collect these evidence-based
											cohorts for future statistical validation and pattern&nbsp;mining.
										</Typography>

										<Download href="/downloads/publications/ieee/2015/patient-like-mine.pdf"/>
									</FeaturedPublication>

									<FeaturedPublication
										next
										name="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
										publisher="RBC"
										tags={['automation', 'custom tooling', 'elasticsearch']}
										when="June 11, 2020"
									>
										<Ul>
											<Li className={classes.li}>Interactive dashboards for monitoring&nbsp;infrastructure</Li>
											<Li className={classes.li}>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee&nbsp;upgrades</Li>
											<Li className={classes.li}>Real–time monitoring of critical infrastructure to enable the SRE team to monitor SLAs for 99.999% (five–nines)&nbsp;availability</Li>
										</Ul>
									</FeaturedPublication>
								</FeaturedPublications>
							</Section>

							<Section className={classes.nextSection} id="events" name="Events">
								<SectionTitle>
									Events
								</SectionTitle>

								{/*<SectionDescription>*/}
								{/*	I frequently create presentations about the different projects that I'm working on for our bi-weekly town hall. In 2019, I also hosted an interactive workshop in partnership with Elastic on machine learning for Catalyst, which is an RBC–specific event taking place during the week of Toronto's popular technology event: Collision.*/}
								{/*</SectionDescription>*/}

								<FeaturedEvents>
									<FeaturedEvent
										title="Anomaly Detection with Elasticsearch"
										host="Catalyst/Collision"
										when="Sep 25, 2019"
									>
										<FeaturedChips list={[
											'talk',
											'workshop',
											'machine learning',
											'anomaly detection'
										]}
										/>

										<Ul>
											<Li className={classes.li}>Talk + Workshop with step-by-step guide&nbsp;handout</Li>
											<Li className={classes.li}>Demo booth featuring our&nbsp;chatbot</Li>
										</Ul>
									</FeaturedEvent>

									<FeaturedEvent
										next
										title="Patient-Like-Mine"
										host="IEEE International Conference on Big Data"
										when="Oct 29 – Nov 1, 2015"
									>
										<Download href="/downloads/publications/ieee/2015/patient-like-mine.pdf" label="Download Paper"/><br/>
										<Download next href="/downloads/events/2015/ieee-international-conference-on-big-data/program-schedule.pdf" label="Download Program Schedule"/>
									</FeaturedEvent>
								</FeaturedEvents>

								{/*<hr/>*/}

								{/*<FeaturedPublication*/}
								{/*	name="2015 IEEE International Conference on Big Data"*/}
								{/*	publisher="RBC"*/}
								{/*	tags={['automation', 'custom tooling', 'elasticsearch']}*/}
								{/*	when="June 11, 2020"*/}
								{/*>*/}
								{/*	<Ul>*/}
								{/*		<Li>Interactive dashboards for monitoring infrastructure</Li>*/}
								{/*		<Li>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee upgrades</Li>*/}
								{/*	</Ul>*/}
								{/*	<Figure*/}
								{/*		alt="Placeholder"*/}
								{/*		caption="Here's me at the event"*/}
								{/*		src="/images/featured/events/example/example.png"*/}
								{/*	/>*/}
								{/*</FeaturedPublication>*/}
							</Section>
						</Sections>
					</Grid>
					<Grid item xs={3}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</MyGridContainer>
			</MyContainer>
		</DefaultLayout>
	);
};
