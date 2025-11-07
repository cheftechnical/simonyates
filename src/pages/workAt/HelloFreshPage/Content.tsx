import Callout from "../../../components/Callout";
import Section from "../../../components/Section";
import Sections from "../../../components/Sections";
import Li from "../../../styling/ListsUnordered/Li";
import Ul from "../../../styling/ListsUnordered/Ul";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtProjects from "../components/WorkAtProjects";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import { sections } from "./sections.ts";

export function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          HelloFresh is a meal kit company headquartered in Berlin, Germany.
          It is the most popular meal kit company in the world, with over 1 billion meals delivered in 2024.<br/><br/>
          Brands include HelloFresh, Green Chef, EveryPlate, Chefs Plate, Factor, Youfoodz, The Pets Table, and Good Chop.
        </WorkAtDescription>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>
        <WorkAtProjects>
          <Ul>
            <Li><strong>Accessibility Leadership:</strong> Identified and resolved compliance issues; supported European Accessibility Act readiness.</Li>
            <Li><strong>Lifecycle Carbon Visualization (Chapter Day exploration project)</strong>: Built an internal prototype comparing meal-kit vs. grocery-chain carbon impact, sparking conversation on sustainability metrics.</Li>
            <Li><strong>Corporate Stewardship Awareness:</strong> Advocated measurable, transparent approaches to accessibility and sustainability, emphasizing harmony between human and ecological systems.</Li>
            <Li><strong>Cross-Functional Collaboration:</strong> Partnered with design and product to integrate inclusive design principles into the development workflows.</Li>
            <Li><strong>Engineering Contributions:</strong> Delivered performant, standards-compliant front-end features enjoyed by millions of customers.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.softwareEngineering.id}>
        <WorkAtSectionTitle>{sections.softwareEngineering.title}</WorkAtSectionTitle>

        <WorkAtProjects>
          <Callout
            list={[
              "React",
              "Typescript",
            ]}
          />
        </WorkAtProjects>
      </Section>
    </Sections>
  );
}

export default Content;

