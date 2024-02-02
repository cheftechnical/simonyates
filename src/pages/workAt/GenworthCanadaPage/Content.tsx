import {SectionItem} from '../../../components/Sections/SectionItem';
import Section from '../../../components/Section/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtProject from '../components/WorkAtProject';
import Callout from '../../../components/Callout/Callout';
import Quote from '../../../components/Quote/Quote';
import Sections from '../../../components/Sections/Sections';
import {WorkAtContentProps} from '../WorkAtContentProps';
import {Typography} from "@mui/material";

interface Props extends WorkAtContentProps {}

export default function Content(props: Props) {
  const {onChange} = props;

  const handleChange = ((newValues: SectionItem[]) => {
    if (onChange) onChange(newValues);
  });

  return (
    <Sections onChange={handleChange}>
      <Section id="intro" name="Intro">
        <WorkAtDescription>
          Genworth Canada is the leading private sector supplier of mortgage default
          insurance in&nbsp;Canada.
        </WorkAtDescription>
      </Section>

      <Section id="about-the-project" name="About the Project">
        <WorkAtSectionTitle>
          About the Project
        </WorkAtSectionTitle>

        <Typography component="p" variant="primaryBody">
          Genworth Canada was leading a North American initiative to move their application
          system to Elasticsearch. The goal of this new system: make it easier for Genworth to
          detect &ldquo;red-flag&rdquo; indicators of fraud from customer&nbsp;applications.
        </Typography>

        <WorkAtProjects>
          <WorkAtProject next name="Finding Duplicates">
            <Typography component="p" variant="primaryBodyNext">
              I was hired based on my previous experience with Elasticsearch, but finding ways of
              removing dependencies on vendor services was not something I was expected to do. It
              was only after I got involved in the project and learned about their use case that I
              saw an opportunity to suggest a better way of doing&nbsp;things.
            </Typography>
            <Typography component="p" variant="primaryBodyNext">
              Using several state-of-the-art features of Elasticsearch, I was able to prototype a
              solution that effectively replaced a dependency on one of their key data analytics
              vendors, saving Genworth 10&rdquo;s of thousands of dollars&nbsp;annually!
            </Typography>

            <Callout noBottomGutter list={[
              'Node.js + Express w/ socket.io',
              'Extjs',
              'Elasticsearch',
              'MQTT',
              'Selenium'
            ]}/>
          </WorkAtProject>
        </WorkAtProjects>
      </Section>

      <Section id="recognition" name="Recognition">
        <WorkAtSectionTitle>
          Recognition
        </WorkAtSectionTitle>

        <Quote source="Michael Rossi, Product Manager, Genworth Canada">
          Simon has been critical in helping the team in adding technologies like Node.js,
          Elasticsearch, and ExtJS to the Path technology stack building on his
          past&nbsp;experiences.
        </Quote>
      </Section>
    </Sections>
  );
};
