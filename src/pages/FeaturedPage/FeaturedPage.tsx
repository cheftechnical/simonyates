import FeaturedPublication from './components/FeaturedPublication';
import Sections from '../../components/Sections/Sections';
import Section from '../../components/Section/Section';
// import NavRight from '../../components/NavRight/NavRight';
import Ul from '../../styling/ListsUnordered/Ul/Ul';
import Li from '../../styling/ListsUnordered/Li/Li';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import Download from './Download';
import rem from '../../styling/rem';
import FeaturedEvent from './components/FeaturedEvent';
import FeaturedEvents from './components/FeaturedEvents';
import FeaturedPublications from './components/FeaturedPublications';
import {color} from '../../styling/Color/Color';
import FeaturedChips from './components/FeaturedChips';
import MyContainer from '../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer/MyGridContainer';
import {useSections} from '../../components/Sections/useSections';
import {Grid, styled, Typography} from "@mui/material";
import PageWrapper from '../../components/PageWrapper';

// const useStyles = makeStyles(() => ({
//   nextSection: {
//     marginTop: rem(68),
//   },
//   li: {
//     color: color.grey['700'],
//
//     '&:before': {
//       color: color.grey['500']
//     }
//   },
//   typography: {
//     color: color.grey['700']
//   }
// }));

const StyledLi = styled(Li)(() => ({
  color: color.grey['700'],
  '&:before': {
    color: color.grey['500']
  }
}))

const StyledNextSection = styled(Section)(() => ({
  marginTop: rem(68),
}))

const StyledTypography = styled(Typography)(() => ({
  color: color.grey['700']
})) as typeof Typography;

export default function Featured() {
  // const classes = useStyles();
  const [_sections, handleSectionChange] = useSections();

  return (
    <PageWrapper title="Featured">
      <MyContainer>
        <MyGridContainer>
          {/* Content */}
          <Grid item md={6} xs={12}>
            <Sections onChange={handleSectionChange}>
              <Section id="publications" name="Publications">
                <SectionTitle>
                  Publications
                </SectionTitle>

                <SectionDescription>
                  I&rsquo;ve been incredibly lucky to work along some of the brightest minds of North&nbsp;America
                </SectionDescription>

                <FeaturedPublications>
                  <FeaturedPublication
                    name="Patient-Like-Mine: A Real Time, Visual Analytics Tool for Clinical Decision Support"
                    publisher="IEEE Big Data"
                    tags={['electronic medical record', 'clinical decision support', 'real-time analytics', 'visual analytics', 'data mining']}
                    when="2015"
                  >
                    <StyledTypography variant="primaryBody">
                      Abstract &mdash; We developed a real-time, visual analytics tool for
                      clinical decision support. The system expands the &ldquo;recall of past
                      experience&rdquo; approach that a provider (physician) uses to formulate a
                      course of action for a given patient. By utilizing Big-Data techniques, we
                      enable the provider to recall all similar patients from an
                      institution&rsquo;s electronic medical record (EMR) repository, to
                      explore &ldquo;what-if&rdquo; scenarios, and to collect these evidence-based
                      cohorts for future statistical validation and pattern&nbsp;mining.
                    </StyledTypography>

                    <br/>
                    <br/>
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
                      <StyledLi>Interactive dashboards for monitoring&nbsp;infrastructure</StyledLi>
                      <StyledLi>A live–view monitor shows the status of hundreds of servers in
                        real–time that became an essential tool for Apigee&nbsp;upgrades</StyledLi>
                      <StyledLi>Real–time monitoring of critical infrastructure to enable the SRE team
                        to monitor SLAs for 99.999% (five–nines)&nbsp;availability</StyledLi>
                    </Ul>
                  </FeaturedPublication>
                </FeaturedPublications>
              </Section>

              <StyledNextSection id="events" name="Events">
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
                      <StyledLi>Talk + Workshop with step-by-step guide&nbsp;handout</StyledLi>
                      <StyledLi>Demo booth featuring our&nbsp;chatbot</StyledLi>
                    </Ul>
                  </FeaturedEvent>

                  <FeaturedEvent
                    next
                    title="Patient-Like-Mine"
                    host="IEEE International Conference on Big Data"
                    when="Oct 29 – Nov 1, 2015"
                  >
                    <Download
                      href="https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf"
                      label="Download Paper"
                    /><br/>
                    <Download
                      next
                      href="https://s3.amazonaws.com/simonyates.ca-downloads/events/2015/ieee-international-conference-on-big-data/program-schedule.pdf"
                      label="Download Program Schedule"
                    />
                  </FeaturedEvent>
                </FeaturedEvents>

              </StyledNextSection>
            </Sections>
          </Grid>

          {/* Gutter */}
          <Grid item md={3}/>

          {/* Navigation */}
          <Grid item md={3}>
            {/* <NavRight sections={sections}/> */}
          </Grid>
        </MyGridContainer>
      </MyContainer>
    </PageWrapper>
  );
};
