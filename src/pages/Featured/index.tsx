import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Button, Container, Grid} from '@material-ui/core';
import Publication from './Publication';
import Sections from '../../components/Sections';
import Section from '../../components/Section';
import NavRight from '../../components/NavRight';
import {SectionItem} from '../../components/Section/SectionItem';
import {makeStyles} from '@material-ui/core/styles';
import Ul from '../../styling/ListsUnordered/Ul/intex';
import Li from '../../styling/ListsUnordered/Li/intex';
import Figure from '../../components/Figure';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import Download from './Download';
import rem from '../../styling/rem';

const useStyles = makeStyles((theme) => ({
	nextSection: {
		marginTop: rem(68),
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
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="publications" name="Publications">
								<SectionTitle>
									Publications
								</SectionTitle>

								<SectionDescription>
									I&rsquo;ve been incredibly lucky to work along some of the brightest minds of North America
								</SectionDescription>

								<Publication
									name="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
									publisher="RBC"
									tags={['automation', 'custom tooling', 'elasticsearch']}
									when="June 11, 2020"
								>
									<Ul>
										<Li>Interactive dashboards for monitoring infrastructure</Li>
										<Li>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee upgrades</Li>
										<Li>Real–time monitoring of critical infrastructure to enable the SRE team to monitor SLAs for 99.999% (five–nines) availability </Li>
									</Ul>
								</Publication>

								<Publication
									name="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
									publisher="RBC"
									tags={['automation', 'custom tooling', 'elasticsearch']}
									when="June 11, 2020"
								>
									<Ul>
										<Li>Interactive dashboards for monitoring infrastructure</Li>
										<Li>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee upgrades</Li>
										<Li>Real–time monitoring of critical infrastructure to enable the SRE team to monitor SLAs for 99.999% (five–nines) availability </Li>
									</Ul>

									<Download href="/#"/>

								</Publication>
							</Section>

							<Section className={classes.nextSection} id="events" name="Events">
								<SectionTitle>
									Events
								</SectionTitle>

								<SectionDescription>
									I frequently create presentations about the different projects that I'm working on for our bi-weekly town hall. In 2019, I also hosted an interactive workshop in partnership with Elastic on machine learning for Catalyst, which is an RBC–specific event taking place during the week of Toronto's popular technology event: Collision.
								</SectionDescription>

								<Publication
									name="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
									publisher="RBC"
									tags={['automation', 'custom tooling', 'elasticsearch']}
									when="June 11, 2020"
								>
									<Ul>
										<Li>Interactive dashboards for monitoring infrastructure</Li>
										<Li>A live–view monitor shows the status of hundreds of servers in real–time that became an essential tool for Apigee upgrades</Li>
									</Ul>
									<Figure
										alt="Placeholder"
										caption="Here's me at the event"
										src="/images/featured/events/example/example.png"
									/>
								</Publication>
							</Section>
						</Sections>
					</Grid>
					<Grid item xs={3}/>
					<Grid item xs={3}>
						<NavRight sections={sections}/>
					</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
