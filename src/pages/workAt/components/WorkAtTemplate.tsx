import { ReactElement, useMemo } from "react";
import MyContainer from "../../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../../styling/MyGridContainer/MyGridContainer";
import WorkAtEmployer from "./WorkAtEmployer";
import WorkAtRole from "./WorkAtRole";
import WorkAtWhenWhere from "./WorkAtWhenWhere";
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
        <div className="flex-shrink-0 basis-[16.666667%] sm:basis-[8.333333%] max-w-[16.666667%] sm:max-w-[8.333333%] pl-6">
          {logo}
        </div>

        {/* Show for mobile (xs, sm) */}
        <div className="md:hidden w-5/6 sm:w-1/2 pl-6">
          <div className="h-full flex items-center">{renderedWorkAtEmployer}</div>
        </div>
        <div className="md:hidden w-full pl-6">
          {renderedWorkAtRole}
          {renderedWorkAtWhenWhere}
          {content}
        </div>

        {/* Show for desktop (md, lg, xl) */}
        <div className="hidden md:block md:w-1/2 pl-6">
          <div>{renderedWorkAtEmployer}</div>
          <div>{renderedWorkAtRole}</div>
          {renderedWorkAtWhenWhere}
          {content}
        </div>

        {/* Gutter */}
        <div className="hidden md:block md:w-[16.666667%]" />

        {/* Navigation */}
        <div className="hidden md:block md:w-1/4 pl-6">
          <NavRight sections={sections} />
        </div>
      </MyGridContainer>
    </MyContainer>
  );
}
