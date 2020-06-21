import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Grid, Typography} from '@material-ui/core';
import Publication from './Publication';
import Sections from '../../components/Sections';
import Section from '../../components/Section';
import NavRight from '../../components/NavRight';
import {SectionItem} from '../../components/Section/SectionItem';

export default function Featured() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout top="featured">
			<Grid container>
				<Grid item xs={6}>
					<Sections onChange={handleChange}>
						<Section id="publications" name="Publications">
							<Typography variant="subtitle1">
								I&rsquo;ve been incredibly lucky to work along some of the brightest minds of North America
							</Typography>

							<Publication
								name="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
								publisher="RBC"
								tags={['automation', 'custom tooling', 'elasticsearch']}
								when="June 11, 2020"
							>
								Say something about this publication
							</Publication>
						</Section>

						<Section id="events" name="Events">
							Say something about the events
						</Section>
					</Sections>
				</Grid>
				<Grid item xs={2}>
					<NavRight sections={sections}/>
				</Grid>
			</Grid>
		</DefaultLayout>
	);
};
