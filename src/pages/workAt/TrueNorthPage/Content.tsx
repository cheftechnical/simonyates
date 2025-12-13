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
          TrueNorth is a platform for truckers to manage their fleet.
        </WorkAtDescription>
      </Section>

      <Section id={sections.highlights.id}>
        <WorkAtSectionTitle>{sections.highlights.title}</WorkAtSectionTitle>
        <WorkAtProjects>
          <Ul>
            <Li>Scaled frontend engineering from 2 to 12 engineers across four teams, establishing hiring processes, mentorship, and accessibility standards.</Li>
            <Li>Partnered closely with design and product to ensure quality, inclusivity, and maintainability in all releases.</Li>
            <Li>Introduced scalable, testable architecture improving reliability and developer experience.</Li>
            <Li><strong>Designed an approachable, pattern-based frontend architecture</strong> that empowered engineers of all experience levels to onboard quickly and contribute confidently; led guild mentorship on accessibility and maintainable development.</Li>
            <Li>Managed remote international teams and coordinated delivery across multiple time zones.</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.teamLeading.id}>
        <WorkAtSectionTitle>Team Leading</WorkAtSectionTitle>

        <WorkAtProjects>
          <Ul>
            <Li>
              Led growth of frontend engineering, scaling from 2 to 12 engineers across 4 teams
            </Li>
            <Li>
              Developed hiring process and technical challenge for frontend engineering roles
            </Li>
            <Li>
              Collaborated closely with design and product teams to ensure quality and accessibility
            </Li>
            <Li>
              Architectured a more maintainable, scalable, and testable frontend version
            </Li>
            <Li>
              Procured third-party vendor solutions, documented processes, and integration strategies
            </Li>
            <Li>
              Conducted regular mentoring sessions in semi-month frontend guilds
            </Li>
            <Li>Managed remote team of engineers based in South America</Li>
            <Li>Certified Scrum Master</Li>
          </Ul>
        </WorkAtProjects>
      </Section>

      <Section id={sections.softwareEngineering.id}>
        <WorkAtSectionTitle>Software Engineering</WorkAtSectionTitle>

        <WorkAtProjects>
          <Callout
            list={[
              "Javascript",
              "Material Design System (MUI)",
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
