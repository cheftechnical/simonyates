import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import {SectionItem} from '../../components/Section/SectionItem';
import {Container, Grid} from '@material-ui/core';
import Sections from '../../components/Sections';
import NavRight from '../../components/NavRight';
import Section from '../../components/Section';

export default function Legal() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Legal">
			<Container>
				<Grid container>
					<Grid item xs={6}>
						<Sections onChange={handleChange}>
							<Section id="privacy-policy" name="Privacy Policy">
								<PrivacyPolicy/>
							</Section>
							<Section id="terms-of-service" name="Terms of Service">
								<TermsAndConditions/>
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
