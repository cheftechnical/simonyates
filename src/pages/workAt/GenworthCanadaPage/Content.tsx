import Section from "../../../components/Section/Section";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtProject from "../components/WorkAtProject";
import Callout from "../../../components/Callout/Callout";
import Quote from "../../../components/Quote/Quote";
import Sections from "../../../components/Sections/Sections";
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

      <Section id={sections.aboutTheProject.id}>
        <WorkAtSectionTitle>About the Project</WorkAtSectionTitle>

        <p className="font-primary font-normal text-base leading-6 tracking-[0.5px]">
          Genworth Canada was leading a North American initiative to move their
          application system to Elasticsearch. The goal of this new system: make
          it easier for Genworth to detect &ldquo;red-flag&rdquo; indicators of
          fraud from customer&nbsp;applications.
        </p>

        <WorkAtProjects>
          <WorkAtProject next name="Finding Duplicates">
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px] mt-6">
              I was hired based on my previous experience with Elasticsearch,
              but finding ways of removing dependencies on vendor services was
              not something I was expected to do. It was only after I got
              involved in the project and learned about their use case that I
              saw an opportunity to suggest a better way of doing&nbsp;things.
            </p>
            <p className="font-primary font-normal text-base leading-6 tracking-[0.5px] mt-6">
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
