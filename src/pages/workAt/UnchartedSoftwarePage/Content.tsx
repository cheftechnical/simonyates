import Section from "../../../components/Section/Section";
import WorkAtDescription from "../components/WorkAtDescription";
import Callout from "../../../components/Callout/Callout";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtProject from "../components/WorkAtProject";
import Ul from "../../../styling/ListsUnordered/Ul/Ul";
import Li from "../../../styling/ListsUnordered/Li/Li";
import Sections from "../../../components/Sections/Sections";
import { sections } from "./sections.ts";

export default function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          Uncharted Software is a data visualization company with products used
          by government, law enforcement, financial&nbsp;industries.
        </WorkAtDescription>

        <Callout noBottomGutter variant="alert">
          Due to the sensitivity of work involved, certain details listed below
          have been obfuscated or&nbsp;redacted.
        </Callout>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>
        <WorkAtProjects>
          <Ul>
            <Li>Partnered with data scientists and designers to build early prototypes of a <strong>causal-graph visualization tool</strong>, translating complex relationships into clear, interactive visuals used for model refinement and product design.</Li>
            <Li>Implemented <strong>Natural Language Processing (NLP)</strong> systems to perform Named Entity Recognition (NER) and extract features from unstructured and semi-structured data.</Li>
            <Li><strong>Explored emerging NLP technologies</strong> such as spaCy and Word2Vec to model relationships between entities &mdash; foundational experience that later informed an intuitive understanding of modern LLM-based systems.</Li>
            <Li>Optimized large-scale data pipelines (Scala, Spark, HBase, Hadoop, Elasticsearch) to improve performance and information retrieval speed.</Li>
            <Li>Redesigned search schemas and algorithms to enhance result relevance and system responsiveness.</Li>
            <Li>Contributed to a culture of clarity through visualization, bridging the gap between engineering, data science, and design.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.projects.id}>
        <WorkAtSectionTitle>Projects</WorkAtSectionTitle>

        <WorkAtProjects>
          <WorkAtProject name="[redacted project]" when="2017-2018">
            <Callout
              list={[
                "Node.js + Express",
                "RDF",
                "Turtle (TTL)",
                "SPARQL",
                "D3",
                "Docker",
              ]}
            />

            <Ul>
              <Li>Built back-end framework of new&nbsp;product</Li>
              <Li>
                Built RDF/Turtle/SPARQL parser for causal graph traversing
                and&nbsp;visualization
              </Li>
              <Li>
                Built full-stack prototype of interactive causal&nbsp;graph
              </Li>
              <Li>
                Worked closely with data scientists to develop early prototypes
                of&nbsp;product
              </Li>
            </Ul>
          </WorkAtProject>

          <WorkAtProject next name="TellFinder" when="2016-2017">
            <Callout
              list={[
                "Python w/ spaCy",
                "Scala + Spark",
                "HBase",
                "Hadoop",
                "Elasticsearch",
                "RabbitMQ",
              ]}
            />

            <Ul>
              <Li>
                Optimized Elasticsearch model for improved query response time
                and&nbsp;searchability
              </Li>
              <Li>
                Used NLP and named entity recognition (NER) via spaCy to extract
                data from unstructured and semi-structured&nbsp;data
              </Li>
              <Li>
                Refactored legacy Java code to Scala with rich set of
                unit&nbsp;tests
              </Li>
            </Ul>
          </WorkAtProject>
        </WorkAtProjects>
      </Section>
    </Sections>
  );
}
