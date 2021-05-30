import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import {SectionItem} from '../../components/Section/SectionItem';
import {Grid} from '@material-ui/core';
import Sections from '../../components/Sections';
import NavRight from '../../components/NavRight';
import Section from '../../components/Section';
import MyContainer from '../../styling/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer';

export default function Legal() {
	const [sections, setSections] = React.useState<SectionItem[]>();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Legal">
			<MyContainer>
				<MyGridContainer>
					<Grid item md={6} xs={12}>
						<Sections onChange={handleChange}>
							<Section id="privacy-policy" name="Privacy Policy">
								<PrivacyPolicy/>
							</Section>
							<Section id="terms-of-service" name="Terms of Service">
								<TermsAndConditions/>
							</Section>
						</Sections>
					</Grid>
					<Grid item md={3}/>
					<Grid item md={3}>
						<NavRight sections={sections}/>
					</Grid>
				</MyGridContainer>
			</MyContainer>
		</DefaultLayout>
	);
};
