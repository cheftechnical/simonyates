import Callout from "../../../components/Callout/Callout";
import Quote from "../../../components/Quote/Quote";
import Section from "../../../components/Section/Section";
import Sections from "../../../components/Sections/Sections";
import Li from "../../../styling/ListsUnordered/Li/Li";
import Ul from "../../../styling/ListsUnordered/Ul/Ul";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtProject from "../components/WorkAtProject";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import { sections } from "./sections.ts";

export function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          Genworth Canada is the leading private sector supplier of mortgage
          default insurance in&nbsp;Canada.
        </WorkAtDescription>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>
        <WorkAtProjects>
          <Ul>
            <Li>Designed an intelligent matching system to detect names and addresses referring to the same entity, even with different spellings.</Li>
            <Li>Led company-wide <strong>Lunch &amp; Learn</strong> sessions on Elasticsearch, raising technical literacy and promoting sustainable in-house expertise.</Li>
            <Li>Identified redundancies that eliminated the need for a third-party vendor, saving significant annual costs.</Li>
            <Li>Recognized internally as the <strong>go-to resource</strong> for Elasticsearch optimization and search performance.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.aboutTheProject.id}>
        <WorkAtSectionTitle>About the Project</WorkAtSectionTitle>

        <p className="font-primary font-normal text-base leading-normal">
          Genworth Canada was leading a North American initiative to move their
          application system to Elasticsearch. The goal of this new system: make
          it easier for Genworth to detect &ldquo;red-flag&rdquo; indicators of
          fraud from customer&nbsp;applications.
        </p>

        <WorkAtProjects>
          <WorkAtProject next name="Finding Duplicates">
            <p className="font-primary font-normal text-base leading-normal mt-6">
              I was hired based on my previous experience with Elasticsearch,
              but finding ways of removing dependencies on vendor services was
              not something I was expected to do. It was only after I got
              involved in the project and learned about their use case that I
              saw an opportunity to suggest a better way of doing&nbsp;things.
            </p>
            <p className="font-primary font-normal text-base leading-normal mt-6">
              Using several state-of-the-art features of Elasticsearch, I was
              able to prototype a solution that effectively replaced a
              dependency on one of their key data analytics vendors, saving
              Genworth 10&rdquo;s of thousands of dollars&nbsp;annually!
            </p>

            <Callout
              noBottomGutter
              list={[
                "Node.js + Express w/ socket.io",
                "Extjs",
                "Elasticsearch",
                "MQTT",
                "Selenium",
              ]}
            />
          </WorkAtProject>
        </WorkAtProjects>
      </Section>

      <Section id={sections.recognition.id}>
        <WorkAtSectionTitle>Recognition</WorkAtSectionTitle>

        <Quote source="Michael Rossi, Product Manager, Genworth Canada">
          Simon has been critical in helping the team in adding technologies
          like Node.js, Elasticsearch, and ExtJS to the Path technology stack
          building on his past&nbsp;experiences.
        </Quote>
      </Section>
    </Sections>
  );
}

export default Content;
