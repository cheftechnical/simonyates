import Callout from "../../../components/Callout/Callout.tsx";
import Section from "../../../components/Section/Section.tsx";
import Sections from "../../../components/Sections/index.ts";
import Li from "../../../styling/ListsUnordered/Li/Li.tsx";
import Ul from "../../../styling/ListsUnordered/Ul/Ul.tsx";
import WorkAtDescription from "../components/WorkAtDescription.tsx";
import WorkAtProjects from "../components/WorkAtProjects.tsx";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle.tsx";
import { sections } from "./sections.ts";

export function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          World leader in lighting solutions.
        </WorkAtDescription>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>
        
        <WorkAtProjects>
          <Ul>
            <Li>Transitioned from Consumer Goods to Lighting division; served as <strong>Walmart Category Captain</strong> for automotive lighting.</Li>
            <Li>Automated internal reporting processes through custom-built software, reducing manual workload by 18&ndash;22 hours per week.</Li>
            <Li><strong>Developed an automated pricing catalogue generator</strong> producing branded, customer-specific Excel and PDF workbooks with up-to-date product pricing &mdash; transforming a multi-week process into a task completed in minutes.</Li>
            <Li>System automatically compiled data, generated distribution emails, and eliminated pricing errors &mdash; redefining the department&apos;s workflow.</Li>
            <Li>Created analytical tools to evaluate <strong>planogram profitability</strong> and optimize retail shelf layouts.</Li>
            <Li>Designed a loyalty reward system that contributed to the team winning an <strong>international Quality Improvement award</strong>.</Li>
            <Li><strong>Mapped and streamlined all SAP product maintenance workflows</strong> using UML diagrams to reduce human error and inefficiency; documentation later adopted for training and process standardization.</Li>
            <Li>Represented Philips on the Market Intelligence Think Tank Committee, maintaining national market-share data and contributing insights to strategic planning.</Li>
            <Li>Authored detailed operational manuals to reduce administrative errors and improve cross-departmental consistency.</Li>
            <Li>Early demonstration of <strong>systemic problem-solving</strong> &mdash; using data, automation, and process modelling to streamline real-world operations before formal transition into software engineering.</Li>
          </Ul>
        </WorkAtProjects>

        <Callout
          list={[
            "Business Objects",
            "Microsoft Access",
            "Microsoft Excel",
            "Microsoft SQL Server .NET",
            "SAP",
            "VB.NET",
            "VBA",
            "UML diagrams"
          ]}
        />
      </Section>

    </Sections>
  );
}

export default Content;
