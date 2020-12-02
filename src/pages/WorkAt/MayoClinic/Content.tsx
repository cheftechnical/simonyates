import * as React from 'react';
import {SectionItem} from '../../../components/Section/SectionItem';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import Callout from '../../../components/Callout';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import WorkAtPublications from '../components/WorkAtPublications';
import WorkAtPublication from '../components/WorkAtPublication';
import WorkAtEvents from '../components/WorkAtEvents';
import WorkAtEventsGroup from '../components/WorkAtEventsGroup';
import WorkAtEvent from '../components/WorkAtEvent';
import Figure from '../../../components/Figure';
import Sections from '../../../components/Sections';

interface Props {
	onChange?: (newValues: SectionItem[]) => void;
}

export default function Content(props: Props) {
	const {onChange} = props;

	const handleChange = React.useCallback((newValues: SectionItem[]) => {
		if (onChange) onChange(newValues);
	}, [onChange]);

	return (
		<Sections onChange={handleChange}>
			<Section id="intro" name="Intro">
				<WorkAtDescription>
					Mayo Clinic is an American nonprofit academic medical center based in Rochester, MN,
					focused on integrated patient care, education and research. It employs over 4,500
					physicians and scientists, along with 58,400 administrative and allied
					health&nbsp;staff.
				</WorkAtDescription>
			</Section>

			<Section id="patient-like-mine" name="Patient Like Mine">
				<WorkAtSectionTitle>
					Patient Like Mine
				</WorkAtSectionTitle>

				<Typography group="primary" variant="body" weight="regular">
					The Patient Like Mine project was a real-time, visual analytics tool for clinical
					decision support. The System expands the &ldquo;recall of past experience&rdquo;
					approach that a provider (physician) uses to formulate a course of action for a
					given patient. By utilizing Big Data techniques, we enable the provider to recall
					all similar patients from an institution&rsquo;s electronic medical record (EMR)
					repository, to explore &ldquo;what-if&rdquo; scenarios, and to collect these
					evidence-based cohorts for future statistical validation and pattern&nbsp;mining.
				</Typography>

				<Callout list={[
					'Node.js + Express',
					'Hapi.js',
					'Elasticsearch',
					'MongoDB',
					'RabbitMQ River',
					'Highcharts',
					'D3',
					'Elastic Marvel'
				]}/>

				<Ul>
					<Li>Building all of the visualization tools of the&nbsp;project</Li>
					<Li>Optimizing Elasticsearch queries to provide real-time search on very-large large datasets, which
						included over 1 billion facts, each with over 1 thousand properties and up to 1 thousand data
						points per&nbsp;second</Li>
					<Li>Re-writing an internal tool used for creating complex nested Elasticsearch queries, using modern
						ES6&nbsp;standards</Li>
					<Li>Presenting our work at monthly <em>Lunch-and-Learn</em> workshops, where we would share our
						progress with other teams within the Mayo&nbsp;Clinic</Li>
				</Ul>
			</Section>

			<Section id="publications" name="Publications">
				<WorkAtSectionTitle>
					Publications
				</WorkAtSectionTitle>

				<WorkAtPublications>
					<WorkAtPublication
						author="P. Li, S. Yates, J. Lovely, D. Larson"
						date="2015"
						publisher="IEEE Big Data"
						title="Patient Like Mine: A Real Time, Visual Analytics Tool For Clinical Decision Support"
						link="/downloads/publications/ieee/2015/patient-like-mine.pdf"
					/>
				</WorkAtPublications>
			</Section>

			<Section id="events" name="Events">
				<WorkAtSectionTitle>
					Events
				</WorkAtSectionTitle>

				<WorkAtEvents>
					<WorkAtEventsGroup name="IEEE Big Data Conference">
						<WorkAtEvent
							date="October 29 — November 1, 2015"
							title="Santa Clara, CA, USA"
						/>
					</WorkAtEventsGroup>
				</WorkAtEvents>
			</Section>

			<Section id="recognition" name="Recognition">
				<WorkAtSectionTitle>
					Recognition
				</WorkAtSectionTitle>

				<Figure
					alt="Elasticon 2016"
					caption="Dr. Peter Li acknowledges my help at 43 minutes."
					href="https://www.elastic.co/elasticon/conf/2016/sf/bringing-healthcare-analytics-to-the-point-of-care-at-mayo-clinic"
					callToAction={(<React.Fragment>Watch Video &rsaquo;</React.Fragment>)}
					src="/images/work-at/mayo-clinic/elasticon.png"
				/>
			</Section>
		</Sections>
	);
};
