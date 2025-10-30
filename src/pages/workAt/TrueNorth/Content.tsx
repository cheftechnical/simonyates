import Sections from "../../../components/Sections";
import Section from "../../../components/Section";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import WorkAtProjects from "../components/WorkAtProjects";
import { Typography } from "@mui/material";
import Ul from "../../../styling/ListsUnordered/Ul";
import Li from "../../../styling/ListsUnordered/Li";
import Callout from "../../../components/Callout";
import { sections } from "./sections.ts";

export function Content() {
  return (
    <Sections>
      <Section id={sections.intro.id}>
        <WorkAtDescription>
          TrueNorth is a platform for truckers to manage their fleet.
        </WorkAtDescription>
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
