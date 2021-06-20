import {SectionItem} from '../../../components/Section/SectionItem';
import Section from '../../../components/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import Callout from '../../../components/Callout';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtProject from '../components/WorkAtProject';
import Ul from '../../../styling/ListsUnordered/Ul/intex';
import Li from '../../../styling/ListsUnordered/Li/intex';
import Sections from '../../../components/Sections';
import {WorkAtContentProps} from '../WorkAtContentProps';

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
          Uncharted Software is a data visualization company with products used by government,
          law enforcement, financial&nbsp;industries.
        </WorkAtDescription>

        <Callout noBottomGutter variant="alert">
          Due to the sensitivity of work involved, certain details listed below have been
          obfuscated or&nbsp;redacted.
        </Callout>
      </Section>

      <Section id="projects" name="Projects">
        <WorkAtSectionTitle>
          Projects
        </WorkAtSectionTitle>

        <WorkAtProjects>
          <WorkAtProject name="[redacted project]" when="2017-2018">
            <Callout list={[
              'Node.js + Express',
              'RDF',
              'Turtle (TTL)',
              'SPARQL',
              'D3',
              'Docker'
            ]}/>

            <Ul>
              <Li>Built back-end framework of new&nbsp;product</Li>
              <Li>Built RDF/Turtle/SPARQL parser for causal graph traversing and&nbsp;visualization</Li>
              <Li>Built full-stack prototype of interactive causal&nbsp;graph</Li>
              <Li>Worked closely with data scientists to develop early prototypes of&nbsp;product</Li>
            </Ul>
          </WorkAtProject>

          <WorkAtProject next name="TellFinder" when="2016-2017">
            <Callout list={[
              'Python w/ spaCy',
              'Scala + Spark',
              'HBase',
              'Hadoop',
              'Elasticsearch',
              'RabbitMQ'
            ]}/>

            <Ul>
              <Li>Optimized Elasticsearch model for improved query response time
                and&nbsp;searchability</Li>
              <Li>Used NLP and named entity recognition (NER) via spaCy to extract data from unstructured
                and semi-structured&nbsp;data</Li>
              <Li>Refactored legacy Java code to Scala with rich set of unit&nbsp;tests</Li>
            </Ul>
          </WorkAtProject>
        </WorkAtProjects>
      </Section>
    </Sections>
  );
};
