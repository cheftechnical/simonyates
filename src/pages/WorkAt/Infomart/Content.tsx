import * as React from 'react';
import {SectionItem} from '../../../components/Section/SectionItem';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import Callout from '../../../components/Callout';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import WorkAtProject from '../components/WorkAtProject';
import Sections from '../../../components/Sections';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	onChange?: (newValues: SectionItem[]) => void;
}

const useStyles = makeStyles((theme) => ({
	callout: {
		marginBottom: theme.spacing(20 / 8)
	}
}));

export default function Content(props: Props) {
	const classes = useStyles();
	const {onChange} = props;

	const handleChange = React.useCallback((newValues: SectionItem[]) => {
		if (onChange) onChange(newValues);
	}, [onChange]);

	return (
		<Sections onChange={handleChange}>
			<Section id="intro" name="Intro">
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

			<Section id="about-the-project" name="About the Project">
				<WorkAtSectionTitle>
					About the Project
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
	);
};
