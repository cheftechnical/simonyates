import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import Callout from '../../../components/Callout';
import DefaultLayout from '../../../layouts/Default';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtProject from '../components/WorkAtProject';
import Sections from '../../../components/Sections';
import NavRight from '../../../components/NavRight';
import {SectionItem} from '../../../components/Section/SectionItem';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import Typography from '../../../styling/Typography';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Logo from '../../../components/Logo';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtEvents from '../components/WorkAtEvents';
import WorkAtEventsGroup from '../components/WorkAtEventsGroup';
import WorkAtEvent from '../components/WorkAtEvent';
import WorkAtPublications from '../components/WorkAtPublications';
import WorkAtPublication from '../components/WorkAtPublication';

export default function Rbc() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at RBC" top="work">
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={1}>
						<Logo brand="rbc" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="RBC"
									role="Full-Stack Developer, API Site Reliability Engineering"
									when="July 2018 to Present"
									where="Toronto, Canada"
								/>
								<WorkAtDescription>
									The Royal Bank of Canada (RBC) is the largest bank in Canada by asset value, with
									over 80,000 employees worldwide.
								</WorkAtDescription>
							</Section>

							<Section id="section-1" name="Application Development & Custom&nbsp;Tooling">
								<WorkAtSectionTitle>
									Application Development &amp; Custom Tooling
								</WorkAtSectionTitle>

								<WorkAtProjects>
									<WorkAtProject name="SRE Global Dashboard" when="2019–Present">
										<Typography group="primary" variant="body" weight="regular">
											The SRE Global Dashboard is a collection of dashboards that were designed to
											be accessed by everyone within RBC. Directors, product managers and
											engineers rely on this data to  monitor the availability of more than 600
											APIs and applications.
										</Typography>

										<Typography next group="primary" variant="body" weight="regular">
											I conceptualized the idea of this project after we (the SRE team) exhausted
											the capabilities of the Elastic Kibana platform. Kibana is great for rapid
											visualization of data, but there are significant limitations in the types of
											reporting it can do. I designed and created a stand-alone application that
											handles these reports which allowed us to have more control over the way
											data is presented.
										</Typography>

										<Callout list={[
											'Node.js + Express',
											'React + Typescript',
											'Elasticsearch',
											'PostgreSQL'
										]}/>

										<Ul>
											<Li>
												Interactive series of dashboards for monitoring infrastructure. Know
												what services are working and how well they&rsquo;re performing.
											</Li>
											<Li>
												An organized, real-time view of hundreds of servers across multiple data
												centers. This was an essential tool during a zero-downtime system
												upgrade, as it allowed the SRE team to be sure that traffic was routed
												correctly.
											</Li>
											<Li>
												Real-time monitoring of critical infrastructure which the SRE team has
												an SLA requiring it to provide five-nines availability (99.999%) for the
												bank.
											</Li>
										</Ul>
									</WorkAtProject>

									<WorkAtProject next name="Seven Years of Transaction Data" when="2019–Present">
										<Typography group="primary" variant="body" weight="regular">
											Before this software project began, I fought for certain architectural
											changes that would ensure Elasticsearch could function at scale. The project
											was already well underway before I got involved; it was built by a team
											other than my own and I was relatively new at RBC. So it was an uphill
											battle right from the start, but I prevailed. The changes I proposed were
											later implemented and they increased performance and reliability of the
											service as a result.
										</Typography>

										<Callout list={[
											'Node.js + Express',
											'React + Typescript',
											'Elasticsearch'
										]}/>

										<Ul>
											<Li>
												Recommended changes to existing infrastructure that increased
												reliability of the API
											</Li>
											<Li>
												Built a script that reconciled over 21–billion financial transactions
												to ensure correctness
											</Li>
											<Li>
												Designed self-healing tools that would automatically respond to known
												failure modes
											</Li>
											<Li>
												Built tools that automate monthly maintenance activities. Reduced the
												time that engineers spend each month for maintenance by x% {/* @todo calculate value */}
											</Li>
											<Li>
												Built a functional prototype that optimizes Elasticsearch queries to
												prevent over 4,000 failed search queries each month
											</Li>
										</Ul>
									</WorkAtProject>

									<WorkAtProject next name="Chatbot" when="2019–Present">
										<Typography group="primary" variant="body" weight="regular">
											The SRE team receives [{/* @todo calculate value */}] emails every day, many
											of which are internal customers asking the same general questions, but are
											specific to their APIs. These customers expected an immediate answer, but
											the team was not large enough to provide an immediate response.
										</Typography>

										<Typography next group="primary" variant="body" weight="regular">
											RBC&rsquo;s official Chatbot vendor (the one you'll use on rbc.com), was not
											capable of providing real-time answers from different sources and could only
											respond with pre-composed messages.
										</Typography>

										<Typography next group="primary" variant="body" weight="regular">
											I built the chatbot from the ground-up to respond to these questions, and
											answers were sourced from a variety of APIs to provide real-time metrics in
											its response.
										</Typography>

										<Callout list={[
											'Python + scikit-learn, NLTK, numpy, pandas &amp; spaCy',
											'Elasticsearch'
										]}/>

										<Ul>
											<Li>
												I built a chatbot from scratch to help the team spend less time
												answering common questions from internal customers
											</Li>
											<Li>
												Uses TF-IDF for token vectorization and the named–entity resolution
												(NER) from spaCy
											</Li>
											<Li>
												Made the chatbot answer questions using real–time data in its response
											</Li>
										</Ul>
									</WorkAtProject>

									<WorkAtProject next name="OAuth Client Creator for RBC Capital Markets" when="2020–Present">
										<Typography group="primary" variant="body" weight="regular">
											PingFederate&rsquo;s API system does not support access control layers which
											are necessary to control who can manage OAuth client IDs. I built a system
											to provide this level of control over-top of PingFederate&rsquo;s existing
											core APIs.
										</Typography>

										<Typography next group="primary" variant="body" weight="regular">
											This application allowed RBC to:
										</Typography>

										<Ul>
											<Li>
												Streamline creation and approval of OAuth clients,
												minimizing&nbsp;errors
											</Li>
											<Li>
												Added an access control layer to our PingFederate infrastructure
											</Li>
											<Li>
												Improved logging and record-keeping of each change for auditors
											</Li>
										</Ul>
									</WorkAtProject>
								</WorkAtProjects>
							</Section>

							<Section id="section-2" name="Machine Learning / Artificial&nbsp;Intelligence">
								<WorkAtSectionTitle>
									Machine Learning / Artificial Intelligence
								</WorkAtSectionTitle>

								<Typography group="primary" variant="body" weight="regular">
									I used machine learning libraries in Python to automate some of the activities
									supported by the SRE team. Many of these uses are described above, but some of the
									key highlights include:
								</Typography>

								<Ul>
									<Li>
										Developed a chatbot from scratch to answer common questions and provide answers
										using real-time infrastructure metrics (e.g. "Is service [x] down?" or "Whats
										the TPS for [thing]")
									</Li>
									<Li>
										Used NLP via TF–IDF to automatically label reports about previous incidents to
										help identify areas for improvement
									</Li>
									<Li>
										Developed feature-embedded model that optimizes disk space and makes it possible
										to store years worth of historical logs while preserving entropy. Terabytes of
										data were reduced to mere gigabytes; without this embedding, we were forced to
										purge the data after a short period of time.
									</Li>
								</Ul>
							</Section>

							<Section id="section-3" name="Budgeting">
								<WorkAtSectionTitle>
									Budgeting
								</WorkAtSectionTitle>

								<WorkAtProjects>
									<WorkAtProject name="Cost Chargeback Model" when="2019–Present">
										<Typography group="primary" variant="body" weight="regular">
											In 2020, the SRE team moved to a chargeback costing model. Costs for the
											services supported by the team were often a mix of direct and shared costs.
											The pricing model I designed used API request logs to weigh the fixed and
											variable costs associated each service and provide a total service costs to
											each business unit. The results from this model were updated in real-time
											and displayed in the SRE Global Dashboard.
											{/*In summary, I:*/}
										</Typography>

										<Callout list={[
											'Node.js + Express',
											'React + Typescript',
											'Elasticsearch',
											'PostgreSQL',
											'Microsoft Excel'
										]}/>

										<Ul>
											<Li>
												Developed a charge back model that weighs department costs to internal
												customers
											</Li>
											<Li>
												Costing reports were published in the <em>SRE Global Dashboard</em>
											</Li>
											<Li>
												Provided a solution that was easily understood and explainable to
												stakeholders
											</Li>
										</Ul>
									</WorkAtProject>
								</WorkAtProjects>
							</Section>

							<Section id="section-4" name="Events">
								<WorkAtSectionTitle>
									Events
								</WorkAtSectionTitle>

								<Typography group="primary" variant="body" weight="regular">
									I frequently create presentations about the different projects that I&rsquo;m
									working on for our bi-weekly town hall. In 2019, I also hosted an interactive
									workshop in partnership with Elastic on machine learning for <em>Catalyst</em>,
									which is an RBC–specific event taking place during the week of Toronto&rsquo;s
									popular technology event: <em>Collision</em>.
								</Typography>

								<WorkAtEvents>
									<WorkAtEventsGroup name="10KC">
										<WorkAtEvent date="July 24, 2020" title="Everyday NLP"/>
									</WorkAtEventsGroup>

									<WorkAtEventsGroup name="Catalyst/Collision">
										<WorkAtEvent date="September 2020" title="Rapid Automation by SRE"/>
										<WorkAtEvent date="September 25, 2019" title="Anomaly Detection with Elasticsearch: Talk + Workshop with step-by-step guide handout and a demo booth featuring our chatbot"/>
									</WorkAtEventsGroup>

									<WorkAtEventsGroup name="Town Hall">
										<WorkAtEvent date="May 13, 2020" title="Seven–Year Transaction History Automation"/>
										<WorkAtEvent date="March 25, 2020" title="Introducing the SRE Chargeback Model"/>
										<WorkAtEvent date="February 2 & 27, 2020" title="Five–Nines Monitoring and Automation"/>
										<WorkAtEvent date="January 31, 2020" title="Monitoring Five–Nines Availability"/>
										<WorkAtEvent date="January 20, 2020" title="How the SRE Team Uses Machine Learning To Monitor 1000's of APIs"/>
										<WorkAtEvent date="December 13, 2019" title="Monitoring Seven Years of Business & Personal Transaction History"/>
										<WorkAtEvent date="December 2, 2019" title="SRE Automation with Machine Learning"/>
										<WorkAtEvent date="October 10, 2019" title="Using Supervised Learning to Detect Anomalies in API Requests"/>
										<WorkAtEvent date="August 23, 2019" title="Introducing the SRE Chatbot: Why we built it & how it works"/>
										<WorkAtEvent date="January 25, 2019" title="How to use machine learning in Elasticsearch"/>
										<WorkAtEvent date="January 11, 2019" title="How to Build Effective ELK Watchers"/>
										<WorkAtEvent date="December 7, 2018" title="Automating Ping Federate Client Promotions"/>
										<WorkAtEvent date="November 9 & 23, 2018" title="Validating Seven–Years of Business Transaction History"/>
									</WorkAtEventsGroup>
								</WorkAtEvents>
							</Section>
							<Section id="section-5" name="Publications">
								<WorkAtSectionTitle>
									Publications
								</WorkAtSectionTitle>

								<WorkAtPublications>
									<WorkAtPublication
										title="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
										when="June 11, 2020"
									/>
									<WorkAtPublication
										title="Building Custom Tools to Automate Seven Years of Transaction History"
										when="May 1, 2020"
									/>
									<WorkAtPublication
										title="Using Supervised Learning to Detect Anomalies in API Requests"
										when="March 15, 2020"
									/>
								</WorkAtPublications>
							</Section>

							<Section id="section-6" name="Active Research">
								<WorkAtSectionTitle>
									Active Research
								</WorkAtSectionTitle>
								<Ul>
									<Li>
										Optimized feature embedding to reduce terabytes to a few gigs for efficient
										machine learning
									</Li>
								</Ul>
							</Section>
							<Section id="section-7" name="Other Activities">
								<WorkAtSectionTitle>
									Other Activities
								</WorkAtSectionTitle>

								<Ul>
									<Li>Coordinating & delegating development/deployment strategies</Li>
									<Li>Elasticsearch document/query optimization</Li>
									<Li>Data schema planning</Li>
									<Li>Built an ELK Heartbeat in Go</Li>
									<Li>Built a framework for simplifying the design/test/deployment of ELK Watchers</Li>
									<Li>Wrote Groks (Elastic&rsquo;s regular expression language) to parse server logs during data ingestion</Li>
									<Li>Kibana dashboards and reporting</Li>
									<Li>Code reviews for Java</Li>
								</Ul>
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
