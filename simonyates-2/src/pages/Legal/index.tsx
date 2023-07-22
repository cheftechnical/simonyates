import DefaultLayout from '../../layouts/Default';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import {Grid} from '@material-ui/core';
import Sections from '../../components/Sections';
import NavRight from '../../components/NavRight';
import Section from '../../components/Section';
import MyContainer from '../../styling/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer';
import {useSections} from '../../components/Sections/useSections';

export default function Legal() {
  const [sections, handleSectionChange] = useSections();

  return (
    <DefaultLayout title="Legal">
      <MyContainer>
        <MyGridContainer>
          <Grid item md={6} xs={12}>
            <Sections onChange={handleSectionChange}>
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
