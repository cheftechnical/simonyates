import { ReactElement, useMemo } from "react";
import CenterVertically from "../../../components/CenterVertically/CenterVertically";
import MyContainer from "../../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../../styling/MyGridContainer/MyGridContainer";
import WorkAtEmployer from "./WorkAtEmployer";
import WorkAtRole from "./WorkAtRole";
import WorkAtWhenWhere from "./WorkAtWhenWhere";
import { Box, Grid, Hidden } from "@mui/material";
import { Sections } from "../../../types/Sections.ts";
import NavRight from "../../../components/NavRight";

interface Props {
  /**
   * The main content
   */
  content: ReactElement;
  /**
   * The name of the employer
   */
  employer: string;
  /**
   * The employer's logo
   */
  logo: ReactElement;
  /**
   * The role I performed
   */
  role: ReactElement | string;
  /**
   * A collection of sections
   */
  sections?: Sections;
  /**
   * When I worked here
   */
  when: string;
  /**
   * Where the work was located
   */
  where: string;
}

// const useStyles = makeStyles((themeMui) => ({
//   root: {},
//   role: {
//     paddingTop: themeMui.spacing(28 / 8),
//   }
// }));

export default function WorkAtTemplate(props: Props) {
  // const classes = useStyles();
  // const {content, employer, logo, role, sections, when, where} = props;
  const {
    content,
    employer,
    logo,
    role,
    sections,
    when,
    where
  } = props;

  const renderedWorkAtEmployer = useMemo(() => {
    return <WorkAtEmployer employer={employer} />;
  }, [employer]);

  const renderedWorkAtRole = useMemo(() => {
    return <WorkAtRole>{role}</WorkAtRole>;
  }, [role]);

  const renderedWorkAtWhenWhere = useMemo(() => {
    return <WorkAtWhenWhere when={when} where={where} />;
  }, [when, where]);

  return (
    <MyContainer>
      <MyGridContainer>
        {/* Avatar */}
        <Grid item sm={1} xs={2}>
          {logo}
        </Grid>

        {/* Show for mobile (xs, sm) */}
        <Hidden mdUp>
          {/* Content */}
          <Grid item sm={6} xs={10}>
            <CenterVertically>{renderedWorkAtEmployer}</CenterVertically>
          </Grid>
          <Grid item sm={12} xs={12}>
            {renderedWorkAtRole}
            {renderedWorkAtWhenWhere}
            {content}
          </Grid>
        </Hidden>

        {/* Show for desktop (md, lg, xl) */}
        <Hidden smDown>
          {/* Content */}
          <Grid item sm={6} xs={10}>
            <div>{renderedWorkAtEmployer}</div>
            {/*<div className={classes.role}>*/}
            <Box pt="3.5">{renderedWorkAtRole}</Box>
            {renderedWorkAtWhenWhere}
            {content}
          </Grid>

          {/* Gutter */}
          <Grid item md={2} />

          {/* Navigation */}
          <Grid item md={3}>
            <NavRight sections={sections} />
          </Grid>
        </Hidden>
      </MyGridContainer>
    </MyContainer>
  );
}
