import Sections from "../../../components/Sections";
import {SectionItem} from "../../../components/Sections/SectionItem";
import {WorkAtContentProps} from "../WorkAtContentProps";
import Section from "../../../components/Section";
import WorkAtDescription from "../components/WorkAtDescription";
import WorkAtSectionTitle from "../components/WorkAtSectionTitle";
import WorkAtProjects from "../components/WorkAtProjects";
import {Typography} from "@mui/material";
import Ul from "../../../styling/ListsUnordered/Ul";
import Li from "../../../styling/ListsUnordered/Li";
import Callout from "../../../components/Callout";

export interface Props extends WorkAtContentProps {

}

export default function Content(props: Props) {
  const {onChange} = props;

  const handleChange = ((newValues: SectionItem[]) => {
    if (onChange) onChange(newValues);
  });

  return (
    <Sections onChange={handleChange}>
      <Section id="intro" name="Intro">
        <WorkAtDescription>
          TrueNorth is a platform for truckers to manage their fleet.
        </WorkAtDescription>
      </Section>

      <Section id="team-leading" name="">
        <WorkAtSectionTitle>
          Team Leading
        </WorkAtSectionTitle>

        <WorkAtProjects>
          {/*<WorkAtProject name="Scaling">*/}
          <Typography component="p" variant="primaryBody">
            <Ul>
              <Li>Led growth of frontend engineering, scaling from 2 to 12 engineers across 4 teams</Li>
              <Li>Developed hiring process and technical challenge for frontend engineering roles</Li>
              <Li>Collaborated closely with design and product teams to ensure quality and accessibility</Li>
              <Li>Architectured a more maintainable, scalable, and testable frontend version</Li>
              <Li>Procured third-party vendor solutions, documented processes, and integration strategies</Li>
              <Li>Conducted regular mentoring sessions in semi-month frontend guilds</Li>
              <Li>Managed remote team of engineers based in South America</Li>
              <Li>Certified Scrum Master</Li>
            </Ul>
          </Typography>
          {/*</WorkAtProject>*/}
        </WorkAtProjects>
      </Section>

      <Section id="software-engineering" name="Software Engineering">
        <WorkAtSectionTitle>
          Software Engineering
        </WorkAtSectionTitle>

        <WorkAtProjects>
          {/*<WorkAtProject name="Scaling">*/}
          {/*<Typography component="p" variant="primaryBody">*/}
          {/*</Typography>*/}

          <Callout list={[
            'Javascript',
            'Material Design System (MUI)',
            'React',
            'Typescript',
          ]}/>

          {/*</WorkAtProject>*/}
        </WorkAtProjects>
      </Section>
    </Sections>
  )
}