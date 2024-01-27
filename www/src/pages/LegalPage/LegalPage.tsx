import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import Sections from '../../components/Sections/Sections';
// import NavRight from '../../components/NavRight/NavRight';
import Section from '../../components/Section/Section';
import MyContainer from '../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer/MyGridContainer';
import {useSections} from '../../components/Sections/useSections';
import {Grid} from "@mui/material";
import PageWrapper from "../../components/PageWrapper";

export default function Legal() {
  const [_sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Legal">
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
            {/* <NavRight sections={sections}/> */}
          </Grid>
        </MyGridContainer>
      </MyContainer>
    </PageWrapper>
  );
};
